/* eslint-disable react/prop-types */

import { MdOutlineNavigateNext } from "react-icons/md";

export const Button = ({ children }) => {
  return (
    <a
      href="#"
      className="flex items-center justify-center gap-2 bg-main-color text-main-bg rounded-lg text-sm font-medium py-2"
    >
      {children}
      <MdOutlineNavigateNext size={"17px"} style={{ marginTop: "4px" }} />
    </a>
  );
};

export const ButtonOutline = ({ children }) => {
  return (
    <a
      href="#"
      className="flex items-center justify-center gap-2 border border-main-color text-white rounded-lg text-sm font-medium py-2"
    >
      {children}
      <MdOutlineNavigateNext size={"17px"} style={{ marginTop: "4px" }} />
    </a>
  );
};
