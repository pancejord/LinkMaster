
'use client'
import { MdContactPage } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import LogOutButton from '../../../components/LogOutButton'
import { IoMdHome } from "react-icons/io";
import Link from 'next/link'
import { usePathname } from "next/navigation";






export default function AppSidebar() {

    const path = usePathname()



    return (
        <nav className='flex flex-col text-center mt-12 gap-8'>
                  <Link href={'/account'}>
                    <div className={'items-center justify-center flex gap-2 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]  font-semibold hover:opacity-75 rounded-full ' + (path === '/account' ? "text-white bg-black" : "")}>
                    <MdContactPage size={20}/>My Page
                    </div>
                    </Link>
                    <Link href={'/analytics'}>
                    <div className={'items-center justify-center flex gap-2 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] font-semibold hover:opacity-75 rounded-full ' + (path === '/analytics' ? "text-white bg-black" : "")}>
                    <IoAnalytics size={20}/>Analytics
                    </div>
                    </Link>
                    <Link href={'/'}>
                    <div className='items-center justify-center flex gap-2 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] font-semibold hover:opacity-75 rounded-full '>
                    <IoMdHome size={20}/>Home
                    </div>
                    </Link>
                    <div className='border-t-4'/>
                    <LogOutButton />
                </nav>
    )
}