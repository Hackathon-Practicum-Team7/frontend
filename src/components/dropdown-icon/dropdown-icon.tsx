import dropdownIcon from "../../images/dropdown-icon.svg";
import {ReactElement} from "react";

type TDropdownIconProps = {
  top?: number,
  right?: number,
}
export const DropdownIcon = ({top, right}: TDropdownIconProps): ReactElement => {
  return (
    <img src={dropdownIcon}
         alt={"Свернуть/развернуть"}
         style={{ position: 'absolute', right: `${right}px`, top: `${top}px`, pointerEvents: 'none' }}
    />
  );
}
