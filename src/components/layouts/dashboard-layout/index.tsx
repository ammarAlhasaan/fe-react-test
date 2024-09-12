import {Sidebar} from "../../core";
import {Outlet} from "react-router-dom";

export default function Blank() {
  return (
    <>
      <Sidebar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
