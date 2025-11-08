import { Outlet } from "react-router";
import Blog from "~/components/blog";


import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Newhero from "~/components/newhero";

import Cart from "~/components/shared/cart";
import Navber from "~/components/shared/navber";


export default function layout() {
  return (
    <>
      <Navber />
      <Hero />
      <Outlet />

    
      <Cart />
      <Blog />
      <Newhero />
      <Footer />
    </>
  );
}