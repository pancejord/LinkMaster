
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {redirect} from 'next/navigation'
import UsernameForm from '@/forms/UsernameForm'
import { Page } from '@/models/page'
import mongoose from 'mongoose'
import PageSettingsForm from '@/forms/PageSettingsForm'
import cloneDeep from 'clone-deep'




export default async function AccountPage({searchParams}) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    return redirect('/');
  }

    mongoose.connect(process.env.MONGO_URI);
    
    const page = await Page.findOne({owner: session?.user?.email});

    const leanPage = cloneDeep(page.toJSON());
    leanPage._id = leanPage._id.toString();


  if (page) {
    return (
      <PageSettingsForm page={leanPage} user={session.user} />

    );
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
}