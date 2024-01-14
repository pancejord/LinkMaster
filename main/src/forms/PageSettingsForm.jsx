'use client'

import RadioTogglers from "@/components/layout/radioTogglers";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { IoIosSave } from "react-icons/io";






const PageSettingsForm = ({page, user}) => {

  const saveBaseSettings = (formData) => {
    console.log(formData.get('bio'))

  }



  
  return (


    <div className="-m-4">
      <form action={saveBaseSettings}>
        <div className="bg-gray-200 h-32 flex justify-center items-center">
          <RadioTogglers selected="color"  onChange={() => {}}/>
        </div>
        <div className="flex justify-center relative -top-8">
          <Image className="rounded-full border-4 border-white shadow shadow-black" src={user?.image} alt="avatar" width={128} height={128}></Image>
        </div>
        <div className="p-4">
          <label className=" uppercase text-gray-500 text-xs mb-2" htmlFor="nameIn">Display Name</label>
          <input name="displayName" defaultValue={page.displayName} className="bg-gray-100 border w-full block py-2 px-2 mb-2" type="text" id="nameIn" placeholder="John Doe"/>
          <label className="uppercase text-gray-500 text-xs mb-2" htmlFor="locationIn">Location</label>
          <input name="location" defaultValue={page.location} className="bg-gray-100 border w-full block py-2 px-2 mb-2" type="text" id="locationIn" placeholder="Somewhere on earth"/>
          <label className=" uppercase text-gray-500 text-xs mb-2" htmlFor="bioIn">Bio</label>
          <textarea name="bio" defaultValue={page.bio} className="bg-gray-100 border w-full block py-2 px-2 mb-2" type="text" id="bioIn" placeholder="Tells us about yourself" />
          <div className="flex items-center justify-center">
          <Button type="submit"  className="w-60 bg-blue-400 text-white hover:bg-blue-800 hover:text-white" variant="outline"> <IoIosSave className="mr-1" /> Save</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PageSettingsForm
