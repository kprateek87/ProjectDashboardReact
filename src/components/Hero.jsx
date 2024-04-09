import ProfileBtn from "../buttons/ProfileBtn";
import NewProjectBtn from "../buttons/NewProject";
import Headings from "./Headings";

function Hero() {
  return (
    <div className="bg-[#f5f6f0] m-0">
      <div className="lg:p-[30px] p-[15px] flex items-center">
        <ProfileBtn />
        <span className="mr-auto ml-2 font-bold lg:font-black lg:text-lg">
          Adam Cooper Team
        </span>
        <NewProjectBtn />
      </div>
      <Headings />
    </div>
  );
}

export default Hero;
