import { Searchicon, Electricicon } from "../buttons/icons";
import ProfileBtn from "../buttons/ProfileBtn";
import Start from "../buttons/Start";

function Navbar() {
  return (
    <nav className="max-w-[100vw] flex lg:h-[80px] h-[60px]  pl-[10px] lg:pl-[30px] justify-between items-center w-screen">
      <div className="flex justify-center items-center">
        <div className="lg:h-[40px] lg:w-[40px] p-4 h-[30px] w-[30px] rounded-full lg:text-[25px] text-sm font-black text-white bg-black flex justify-center items-center">
          B
        </div>
        <span className="lg:px-[20px] lg:text-[25px] font-black leading-tight px-2">
          Project Dashboard
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-between">
          <div className="flex gap-0.5 lg:border p-1 border-zinc-400 border-opacity-45 rounded ">
            <Searchicon />
            <input
              type="text"
              placeholder="Search My StoryBoard"
              className="outline-none font-light hidden lg:block"
            />
          </div>
          <div className="flex justify-center lg:gap-2 mx-2 items-center">
            <Start />
            <ProfileBtn />
          </div>
        </div>
        <div className="text-white bg-black lg:ml-5 px-2 py-1 rounded-s-full">
          <Electricicon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
