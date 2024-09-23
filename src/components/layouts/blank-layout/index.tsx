import {Outlet} from "react-router-dom";

export default function BlankLayout() {
  return (
    <div id="page">
      <Outlet/>
    </div>
  );
}
