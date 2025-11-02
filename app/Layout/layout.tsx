import { Outlet } from "react-router";
import Blog from "~/components/blog";
import Contain from "~/components/contain";
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

      <Contain />
      <Cart />
      <Blog />
      <Newhero />
      <Footer />
    </>
  );
}