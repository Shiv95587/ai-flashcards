"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { customAppearance } from "../app/styles/customAppearance";
import { usePathname, useRouter } from "next/navigation";
import { act, useEffect, useState } from "react";
import NavItem from "./NavItem";

export default function NavBar() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState("Home");
  const { isSignedIn } = useUser();
  useEffect(() => {
    if (isSignedIn) {
      if (pathname === "/") setActivePage("Home");
      else if (pathname == "/main") setActivePage("Main");
      else if (pathname === "/my-collection") setActivePage("Collection");
      else if (pathname === "/pricing") setActivePage("Pricing");
      else {
        setActivePage("none");
      }
    }
  }, [isSignedIn, pathname]);
  return (
    isSignedIn && (
      <div className="bg-gray-100">
        <nav className="container w-full flex flex-row bg-gray-100 py-4 relative mx-auto h-12">
          <ul className="flex flex-row justify-center items-center gap-8 flex-grow max-sm:gap-2">
            <NavItem href={"/"} activePage={activePage} name={"Home"} />
            <NavItem href={"/main"} activePage={activePage} name={"Main"} />
            <NavItem
              href={"/my-collection"}
              activePage={activePage}
              name={"Collection"}
            />
            <NavItem
              href={"/pricing"}
              activePage={activePage}
              name={"Pricing"}
            />

            {/* <li className="font-semibold">
        <Link href={"/my-collection"} className="relative group">
          Collection
          <span
            className={`after:block after:bg-blue-600 after:content-[''] after:h-[3px] after:absolute after:left-0 after:-bottom-1 
        after:rounded-lg after:shadow-blue-800 after:shadow-sm
        ${
          activePage === "Collection"
            ? "after:w-full"
            : "after:w-0 after:transition-all after:duration-300  group-hover:after:w-full "
        } `}
          ></span>
        </Link>
      </li>
      <li className="font-semibold">
        <Link href={"/payments"} className="relative group">
          Payments
          <span
            className={`after:block after:bg-blue-600 after:content-[''] after:h-[3px] after:absolute after:left-0 after:-bottom-1 
        after:rounded-lg after:shadow-blue-800 after:shadow-sm
        ${
          activePage === "Payments"
            ? "after:w-full"
            : "after:w-0 after:transition-all after:duration-300  group-hover:after:w-full "
        } `}
          ></span>
        </Link>
      </li> */}
          </ul>
          <div className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2">
            <UserButton appearance={customAppearance} />
          </div>
        </nav>
      </div>
    )
  );
}
