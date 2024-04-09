import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faBolt,
  faEllipsisVertical,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Searchicon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};
export const Electricicon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faBolt} />
    </div>
  );
};
export const FolderIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFolderClosed} />
    </div>
  );
};
export const DropIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};
export const MoreIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
  );
};
