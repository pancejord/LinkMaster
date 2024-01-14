'use client'
import grabUsername from '@/actions/grabUsername'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import { Button } from '@/components/ui/button'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useState } from 'react'
import { MdErrorOutline } from "react-icons/md";
import { redirect } from 'next/navigation'


const headingFont = localFont({
    src: '../../public/fonts/font.woff2'
  })



const UsernameForm = ({username}) => {

  const [taken, setTaken] = useState(false);

  async function handleSubmit(formData) {

    const result = await grabUsername(formData);

    setTaken(result === false);
    if (result) {
      redirect('/account?created='+ formData.get('username'));
    }
  }

  

  return (
    <main>
    <section className="pt-32">
      <form action={handleSubmit}>
      <div className="max-w-6xl h-80 mb-8 mt-10 mx-auto shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] flex-row">
        <h1 className={cn("text-5xl text-center underline font-bold", headingFont.className)}>
          Confirm Username
        </h1>
        <div className='flex items-center justify-center mt-5'>
        <FaArrowAltCircleDown size={50}/>
        </div>
        <div className='flex items-center justify-center'>
        <input name="username" defaultValue={username} className='mt-10 w-64 items-center h-10 flex justify-center text-black font-semibold bg-slate-100 border shadow-lg text-center ' placeholder='username' type='text'/>
        </div> 
        {taken && (
              <div className='flex items-center mx-auto justify-center w-64 bg-red-200 border border-red-500 p-2'>
              <MdErrorOutline className='mr-1' />
                Username Taken
              </div>
        )}
      
        <div className='flex items-center justify-center'>
        <Button className="border h-10 outline rounded-full w-64 mt-3 font-bold hover:bg-white">
        Confirm 
        <IoArrowRedoSharp className='ml-1' />
        </Button>
        </div>
        </div>
        </form>
    </section>
  </main>
  )
}

export default UsernameForm
