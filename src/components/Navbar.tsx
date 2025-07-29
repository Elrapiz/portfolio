"use client";

import Container from "./Container";
import { useEffect, useRef, useState } from "react";
import BrandLink from "./BrandLink";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { GrClose } from "react-icons/gr";

const items = [
  {
    "name": "About",
    "link": "#about"
  },
  {
    "name": "Skills",
    "link": "#skills"
  },
  {
    "name": "Experience",
    "link": "#experience"
  },
  {
    "name": "Projects",
    "link": "#projects"
  },
  {
    "name": "Contact",
    "link": "#contact"
  },
];

export default function Navbar() {
  const currentYPos = useRef(0);
  const [ isSidebarShowing, setIsSidebarShowing ] = useState(false);
  const [ isShowing, setIsShowing ] = useState(true);
  const minY = 10;

  const showSidebar = () => {
    setIsSidebarShowing(true);
  }

  const hideSidebar = () => {
    setIsSidebarShowing(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollEndY = window.scrollY || 0;

      if(scrollEndY > currentYPos.current + minY) {
        setIsShowing(false);
      } else if(scrollEndY < currentYPos.current) {
        setIsShowing(true);
      }
      
      currentYPos.current = scrollEndY;
    }

    window.addEventListener('scrollend', handleScroll, { passive: true });
  }, []);

  return <>
    <nav className={`py-4 fixed left-0 right-0 top-0 z-20 backdrop-blur-lg transition-transform duration-75 transform ${isShowing? "translate-y-0" : "-translate-y-full"}`}>
      <Container>
        <div className="flex items-center justify-between">
          <BrandLink className="max-w-48" />
          
          <div className="flex items-center gap-6 text-gray-600">
            <ul className="hidden md:flex md:items-center md:gap-6">
              {
                items.map(item => {
                  return <li key={item.link} className="hover:text-sky-600"><Link href={item.link}>{item.name}</Link></li>
                })
              }
            </ul>

            {/* Mobile toggler */}
            <RiMenu3Fill onClick={showSidebar} className="w-8 h-8 hover:text-sky-600 active:text-sky-500 md:hidden" />
          </div>
        </div>
      </Container>
    </nav>

    {/* Mobile sidebar */}
    <div className="z-10">
      <div className={`p-8 max-w-xs w-full bg-white fixed top-0 bottom-0 right-0 z-20 transition-transform duration-200 transform ${isSidebarShowing? "translate-x-0" : "translate-x-full"}`}>
        <GrClose onClick={hideSidebar} className="mb-12 w-8 h-8 hover:text-sky-600 active:text-sky-500" />

        <ul>
          {
            items.map(item => {
              return <li onClick={hideSidebar} key={item.link} className="px-4 py-2 mb-2 cursor-pointer hover:text-sky-600"><Link href={item.link}>{item.name}</Link></li>
            })
          }
        </ul>
      </div>

      <div onClick={hideSidebar} className={`${!isSidebarShowing? "hidden" : ""} fixed inset-0 bg-black/20 z-10`}></div>
    </div>
  </>
}
