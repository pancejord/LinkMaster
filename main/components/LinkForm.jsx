'use client'
import { AiOutlineCaretRight } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import {redirect} from 'next/navigation'

const LinkForm = () => {

    const [username, setUsername] = useState("")

     const handleSubmit = async (ev) => {
        ev.preventDefault()
        if(username.length > 0) {
        window.localStorage.setItem('storedUsername', username)
        await signIn('google')
    }
    }

    useEffect(() => {
        if ('localStorage' in window && window.localStorage.getItem('storedUsername')) {
            const username = window.localStorage.getItem('storedUsername')
            window.localStorage.removeItem('storedUsername')
            redirect('/account?username=' + username)
        }
    }, [])



  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center'>
    <AiOutlineCaretRight size={120}/>
      <span className='flex items-center pl-4 h-10 w-22 bg-white py-4'> linklist.to/</span>
      <input value={username} onChange={(ev) => setUsername(ev.target.value)}  placeholder='username' className='flex h-10 shadow-lg w-36'>
        
      </input>
      <Button type="submit" className=" bg-blue-300 h-10 w-32 shadow-lg hover:bg-black over:border-white hover:text-white">Join For Free</Button>
    </form>
  )
}

export default LinkForm
