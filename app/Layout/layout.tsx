import { Outlet } from "react-router";
import Navber from "~/components/shared/navber";


export default function layout() {
  return (
    <>
      <Navber />
      <Outlet />
      <h2> Footer</h2>
    </>
  );
}