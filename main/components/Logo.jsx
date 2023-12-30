import Link from 'next/link'
import Image from 'next/image'



const Logo = () => {
  return (
    <Link href="/">
      <div className='hover:opacity-75 transition p-2 items-center gap-x-2 md:flex'>
        <Image src="/linklist.png" alt='Logo' height={110} width={110}/>
      </div>
    </Link>
  )
}

export default Logo