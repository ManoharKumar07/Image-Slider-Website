import React from "react";
import logo from "./Mlogo.png";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header p-2 ">
      <div className="container sm:w-full flex align-middle justify-between">
        {/* Defining the logo and the name of the website */}
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "inherit",
            background: "transparent",
          }}
        >
          <div className="flex justify-center align-baseline">
            <img src={logo} alt="logo" className="h-10" />
            <h2 className="Name mt-0.5 text-3xl">Image Slider pro</h2>
          </div>
        </Link>

        {/* Defining the ADD Image button in the header  */}
        <Link
          to={"/addImage"}
          style={{
            textDecoration: "none",
            color: "inherit",
            background: "transparent",
          }}
        >
          <div className="addImage hover:bg-blue-500 transition duration-150 ease-out hover:ease-in flex justify-start align-center p-2 ">
            <AddAPhotoIcon />
            <p>Add Image</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
