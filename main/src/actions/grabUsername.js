'use server';

import { Page } from "@/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function grabUsername(formData) {
    const username = formData.get('username');
    mongoose.connect(process.env.MONGO_URI)
    const existingUsername = await Page.findOne({
        uri: username
    })
    if (existingUsername) {
        return false
    } else {
        const session = await getServerSession(authOptions);
    return await Page.create({
      uri: username,
      owner: session?.user?.email,
    });
  }
}