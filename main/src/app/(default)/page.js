import localFont from 'next/font/local'
import { cn } from '@/lib/utils';
import LinkForm from '../../../components/LinkForm';

const headingFont = localFont({
  src: '../../../public/fonts/font.woff2'
})

export default function Home() {
  return (

    <main>
      <section className="pt-32">
        <div className="max-w-4xl mb-8 mt-10 mx-auto">
          <h1 className={cn("text-7xl text-center font-bold", headingFont.className)}>
            Your one link<br/> for everything
          </h1>
          <h2 className={cn("text-gray-500 text-center  text-2xl mt-6", headingFont.className)}>
            Share your links, social profiles,<br /> contact info and more on one page
          </h2>
         <LinkForm/>
                  </div>

        
      </section>
    </main>

  




  )
}
