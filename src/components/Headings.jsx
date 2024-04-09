import { DropIcon, FolderIcon, MoreIcon } from "../buttons/icons";
import { StoryBoards } from "../data/StoryBoards";
import Content from "../content";
import { useState } from "react";

function Headings() {
  const [toggleContent, setToggleContent] = useState(false);
  const handleContent = () => {
    if (toggleContent) {
      setToggleContent(false);
    } else {
      setToggleContent(true);
    }
  };
  return (
    <div>
      {StoryBoards.map((item) => (
        <div className="">
        <div
          className="px-[15px] py-[10px] m-[20px] bg-white rounded-lg "
        >
          <div key={item.id} className="flex justify-start items-center my-[30px]">
            <div className="lg:text-[25px] text-xl">
              <FolderIcon />
            </div>
            <div onClick={handleContent} className="ml-3">
              <div className="lg:text-2xl text-lg leading-tight">{item.BoardName}</div>
              <div className="text-base text-zinc-400">storyboard</div>
            </div>
            <div className="flex ml-auto text-lg">
              <div onClick={handleContent} className={`flex justify-center items-center mx-2 h-10 w-10 cursor-pointer transition duration-300 hover:bg-zinc-300 rounded-full ${toggleContent ? "rotate-180":""}`}>
                <DropIcon />
              </div>
              <div className="flex justify-center items-center mx-2 h-10 w-10 cursor-pointer transition duration-300 hover:bg-zinc-300 rounded-full">
                <MoreIcon />
              </div>
            </div>
          </div>
          <div className={`${toggleContent ? "":"hidden"} transition duration-300`}>
        <Content />
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Headings;
