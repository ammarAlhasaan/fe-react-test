import {Outlet} from "react-router-dom";

export default function Blank() {
  return (
    <>
      <div id="page">
        <Outlet />
      </div>
    </>
  );
}
