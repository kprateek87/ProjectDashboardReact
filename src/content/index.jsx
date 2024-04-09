import { Stories } from "../data/Stories";
import NewStory from "../components/NewStory";

const Content = () => {
  
  return (
    <div className="flex flex-wrap gap-4 my-7">
      {Stories.map((item) => (
        <div key={item.id} class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={item.image} />
          <div class="px-6 py-4">
            <div class="font-medium text-xl mb-2">{item.text}</div>
            <p class="text-gray-400 text-base">{item.date}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center text-5xl max-w-sm w-full bg-zinc-100 cursor-pointer rounded-lg">
      <NewStory />
      </div>
    </div>
  );
};

export default Content;
