import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex m-0 p-0">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
