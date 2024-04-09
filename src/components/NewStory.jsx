import { faPlusCircle, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CloseIcon } from "../buttons/CloseIcon";
import img1 from "../images/DemoL1.jpg";
import img2 from "../images/DemoL2.jpg";
import { useState } from "react";

function NewStory() {
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => {
    if(showForm){
      setShowForm(false)
    }
    else{
      setShowForm(true)
    }
  }

  return (
    <div>
      <div onClick={handleClose}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
      <div
        className={`${showForm ? "" : "hidden"} absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
      >
        <div
          className={`z-50 w-full max-w-sm bg-white px-[20px] rounded-lg`}
        >
          <div className="flex justify-between items-center my-[15px]">
            <p className="text-2xl font-black">New Story</p>
            <div onClick={handleClose} className="cursor-pointer">
              <CloseIcon  />
            </div>
          </div>
          <form>
            <div className="my-[30px]">
              <div className="m-3 flex flex-col">
                <label className="block text-gray-700 text-sm font-bold ">
                  Story Title
                </label>
                <input
                  className=" m-0 shadow appearance-none text-base border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline px-2"
                  id="boardName"
                  type="text"
                  placeholder="Your Story Title"
                />
              </div>
              <div className="mx-3">
                <label className="block text-gray-700 text-sm font-bold">
                 Upload Image
                </label>
                <select className="block text-base w-full px-2 bg-white border border-gray-400 hover:border-gray-500 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option><img src={img1} alt={img1} className="h-3"/> image 1</option>
                  <option><img src={img2} alt={img2} className="h-3"/> image 2</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between mb-[30px] px-[30px]">
              <div
                className="flex cursor-pointer items-center lg:text-base text-xs">
                <div
                  className={`text-lg transition duration-200`}
                >
                  <FontAwesomeIcon icon={faToggleOn} />
                  <FontAwesomeIcon icon={faToggleOff} />
                </div>
                Ai Assistant
              </div>
              <button
                className="bg-blue-500 text-base hover:bg-blue-700 text-white lg:font-bold font-medium px-3 py-2 rounded focus:outline-none focus:shadow-outline mb-3"
                type="button"
              >
                Add Story
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewStory;
