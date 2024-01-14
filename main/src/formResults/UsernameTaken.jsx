
import { MdErrorOutline } from "react-icons/md";
import {useFormState} from 'react-dom'
import grabUsername from "@/actions/grabUsername";

const UsernameTaken = () => {

  return (
    <div className='flex items-center mx-auto justify-center w-64 bg-red-200 border border-red-500 p-2'>
    <MdErrorOutline className='mr-1' />
      Username Taken
    </div>
  )
}

export default UsernameTaken
