import Image from 'next/image'
import Logo from './Logo'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import LogOutButton from './LogOutButton'
import { FaUserCircle } from "react-icons/fa";





export default async function Header() {

  const session = await getServerSession(authOptions)

  return (
    <header>
    <div className='fixed top-0 w-full h-20 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        {!session && (
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Link href="/login" className={buttonVariants({variant: "outline", className: "text-base shadow-lg hover:bg-black hover:text-white"})}>
          Login
          </Link>
    
          <Link href="/login" className={buttonVariants({variant: "outline", className: "text-base bg-black shadow-lg text-white hover:bg-white hover:text-black"})}>
          Create An Account
          </Link>
          </div>
          )}
          {!!session && (
            <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Link href="/account" className={buttonVariants({variant: "outline", className: "text-base shadow-lg hover:bg-black hover:text-white"})}>
          Hello, {session?.user.name} <FaUserCircle className='ml-2' />

          </Link>

          <LogOutButton />
    
          </div>
          )}
          </div>

      </div>
      </header>

  
  )
}
