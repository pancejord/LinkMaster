'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { HiLogout } from "react-icons/hi";


const LogOutButton = () => {
  return (
    <button onClick={() => signOut()} className={buttonVariants({variant: "outline", className: "text-base shadow-lg hover:bg-black hover:text-white"})}>
    Logout
   <HiLogout className='ml-1' />

    </button>
  )
}

export default LogOutButton
