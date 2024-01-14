import { IoMdColorFill } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";




const RadioTogglers = ({onChange}) => {
  return (
    <div className="radio-togglers flex">
    <label>
    <input className="hidden" type="radio" name="bgType" value="color" />
    <span className="bg-white p-2 px-4 shadow flex">
    <IoMdColorFill className="mt-1 mr-1" />
      Color </span>
    </label>
    <label>
    <input className="hidden" type="radio" name="bgType" value="color" />
    <span className="bg-white p-2 px-4 flex shadow">
    <MdAddPhotoAlternate className="mt-1 mr-1"/>
      Image</span>
    </label>
  </div>

  )
}

export default RadioTogglers
