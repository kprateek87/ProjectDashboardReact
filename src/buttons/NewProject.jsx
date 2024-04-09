import { useState } from "react";
import Ai from "./Ai";
import { CloseIcon } from "./CloseIcon";

function NewProjectBtn() {
  const [toggleNewProject, setToggleNewProject] = useState(false);
  const handleprojectForm = () => {
    if (toggleNewProject) {
      setToggleNewProject(false);
    } else {
      setToggleNewProject(true);
    }
  };
  return (
    <>
      <div
        className={`absolute ${
          toggleNewProject ? "bg-slate-700 bg-opacity-65" : "hidden"
        } h-full w-screen m-0 top-0 left-0`}
      ></div>
      <button
        onClick={handleprojectForm}
        className="cursor-pointer text-white bg-black rounded py-2 px-4"
      >
        New Project
      </button>
      <div
        className={`${
          toggleNewProject ? "" : "hidden"
        } transition duration-300`}
      >
        <div
          className={`w-full max-w-sm bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-[20px] rounded-lg`}
        >
          <div className="flex justify-between items-center my-[15px]">
            <p className="text-3xl font-black">New Storyboard</p>
            <div onClick={handleprojectForm} className="cursor-pointer">
              <CloseIcon />
            </div>
          </div>
          <form>
            <div className="my-[30px]">
              <div className="m-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Storyboard Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline px-2"
                  id="boardName"
                  type="text"
                  placeholder="e.g. Default Project Storyboard"
                />
              </div>
              <div className="mx-3">
                <label className="block text-gray-700 text-sm font-bold">
                  Frame Size
                </label>
                <select className="block w-full px-2 bg-white border border-gray-400 hover:border-gray-500 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Landscape (16:9)</option>
                  <option>Portrait (9:16)</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between mb-[30px] px-[30px]">
              <Ai />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white lg:font-bold font-medium px-3 py-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create Storyboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewProjectBtn;
