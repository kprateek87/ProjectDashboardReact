
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Popup() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg w-[500px] min-h-[300px]">
      <div className="flex justify-between p-10">
        <div className="text-[25px] font-black">
          New Project
        </div>
        <div className="">
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
    </div>
  )
}

export default Popup