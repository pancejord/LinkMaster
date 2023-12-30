'use client'

import localFont from 'next/font/local'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {signIn} from "next-auth/react"

import Divider from '../../../components/Divider';
import Google from 'next-auth/providers/google';


const headingFont = localFont({
  src: '../../../public/fonts/font.woff2'
})

const page = () => {
  return (
    <div className='flex-col flex mt-24 items-center py-20 justify-center '>
      <div className={cn('text-8xl pb-5 shadow-lg  text-black pt-3 w-full mx-auto flex items-center justify-center ', headingFont.className)}>
        Login
      </div>
      <p className={cn("text-gray-500 text-center  text-2xl mt-6", headingFont.className)}>Sign into your account using one of the methods below</p>

      <div className='flex items-center w-full h-20 p-2 mt-2 justify-center'>
      <Button onClick={() => {signIn('google')}} className="h-10 outline rounded-full w-64 mt-3 hover:bg-slate-50">
        <div className='p-2'>
      <FcGoogle size={23} />
      </div>
      Sign in with Google
      </Button>
      </div>
      <Divider />
      <Button onClick={() => {signIn('github')}} className="h-10 outline mt-8 rounded-full w-64 hover:bg-slate-50">
        <div className='p-2'>
        <FaGithub size={23} />
      </div>
      Sign in with GitHub
      </Button>

    </div>
  )
}

export default page
