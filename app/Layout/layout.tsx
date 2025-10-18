import { Outlet } from "react-router";


export default function layout() {
  return (
    <>
      <h1>Header</h1>
      <Outlet/>
      <h2> Footer</h2>
    </>
  );
}