"use client";
import { ImagePath } from "@/app/utils/images.path";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/app/assets/images/Logo.png";
import "./header.css";

import { LuChevronDown } from "react-icons/lu";

import { BsFillTelephoneFill, BsTicketPerforated } from "react-icons/bs";
import Image from "next/image";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const dropDownListBoxes = [
  {
    title: "A to Z",
    links: [
      { title: "Rabipose-DSR3T", href: "/ProductDetails/1" },
      { title: "Arocef - 200", href: "/ProductDetails/2" },
      { title: "Budalecs", href: "/ProductDetails/3" },
    ].sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    title: "Categories",
    links: [
      { title: "Gastro", href: "/ProductDetails/3" },
      { title: "Respiratory", href: "/ProductDetails/2" },
      { title: "Antibiotics", href: "/ProductDetails/2" },
      { title: "Nutraceuticals", href: "/ProductDetails/3" },
      { title: "Pediatric", href: "/ProductDetails/3" },
      { title: "Neurology", href: "/ProductDetails/3" },
      { title: "Urology", href: "/ProductDetails/3" },
      { title: "Injectables", href: "/ProductDetails/3" },
      { title: "Syrups & Dry Syrups", href: "/ProductDetails/3" },
      { title: "Powder & Sachet", href: "/ProductDetails/3" },
      { title: "Gynaecology", href: "/ProductDetails/3" },
      { title: "ENT & Opthalmic", href: "/ProductDetails/3" },
      { title: "Ortho", href: "/ProductDetails/3" },
      { title: "Ayurvedic", href: "/ProductDetails/3" },
      { title: "Derma", href: "/ProductDetails/3" },
      { title: "Cardio-Diabetics", href: "/ProductDetails/3" },
      {
        title: "Sexual",
        href: "https://www.siraremedies.in/",
        target: "_blank",
      },
    ].sort((a, b) => a.title.localeCompare(b.title)),
  },
  // {
  //   title: "By Composition",
  //   links: [
  //     { title: "Rabipose-DSR3T", href: "/ProductDetails/1" },
  //     { title: "Arocef - 200", href: "/ProductDetails/2" },
  //     { title: "Budalecs", href: "/ProductDetails/3" },
  //   ],
  // },
];

let MENU = [
  {
    title: "Products",
    link: "/product",
    icon: "fa-solid fa-caret-down",
    subMenu: [
      { title: "Office Space", link: "/" },
      { title: "Land", link: "/" },
      { title: "Shop", link: "/" },
      { title: "Showroom", link: "/" },
      { title: "Industrial Plot", link: "/" },
      { title: "Office Space in IT/SEZ", link: "/" },
      { title: "Warehouse", link: "/" },
      { title: "Co-working Space", link: "/" },
    ],
  },

  // {
  //     title: "Home",
  //     link: "/",
  // },
  // {
  //     title: "About",
  //     link: "/about-us"
  // },
  // {
  //     title: "Pricing",
  //     link: "/pricing"
  // },
  // {
  //     title: "Contact",
  //     link: "/contact-us"
  // },
];

const Navbar = (handleClickMenuOpen: any) => {
  const [active, setActive] = useState<any>("/");
  const handleLinkClick = (link: string) => {
    setActive(link);
    document
      .querySelector(".navigation-menu")!
      .classList.toggle("navbar-menu-open");
    document.body.classList.toggle("overflow-y-hidden-fixed");
  };
  return (
    <nav className="navbar-menu ">
      <ul className="navbar-menu-items">
        <li className="navbar-menu-item" onClick={() => handleLinkClick("/")}>
          <Link
            href={"/"}
            className={`nav-item ${active === "/" ? "active-link" : ""}`}
          >
            Home
          </Link>
        </li>
        {MENU.map((item, index) => {
          return (
            <li
              key={index.toString()}
              className="navbar-menu-item"
              onMouseOver={() => setActive(index)}
              onClick={() => setActive(active === index ? 999 : index)}
            >
              <Link
                href={"#"}
                className={`menu-item ${
                  active === item.link ? "active-link" : ""
                }`}
              >
                <span>{item.title}</span> <LuChevronDown size={18} />
              </Link>
              {active === index && item?.subMenu?.length && (
                <div className="navbar-submenu-item-container">
                  <ul className="navbar-submenu-items">
                    {dropDownListBoxes?.map((sub, i) => {
                      return (
                        <li className="navbar-submenu-item" key={sub.title}>
                          <div className="navbar-submenu-dropdown-mega">
                            <p className="navbar-submenu-dropdown-mega-heading">
                              {sub.title}
                            </p>
                            <ul className="navbar-submenu-dropdown-mega-ul">
                              {sub.links.map((subb, j) => {
                                return (
                                  <li
                                    className="navbar-submenu-dropdown-mega-li"
                                    key={subb.title}
                                    onClick={() => handleLinkClick(subb?.href)}
                                  >
                                    <Link href={subb.href}>{subb.title}</Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
        <li className="navbar-menu-item">
          <Link
            href={"/career"}
            className={`nav-item ${active === "/career" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("/career")}
          >
            Careers
          </Link>
          <Link
            href={"/blogs"}
            className={`nav-item ${active === "/blogs" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("/blogs")}
          >
            Blogs
          </Link>

          <Link
            href={"/aboutus"}
            className={`nav-item ${active === "/aboutus" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("/aboutus")}
          >
            About Us
          </Link>
          <Link
            href={"/contactus"}
            className={`nav-item ${
              active === "/contactus" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/contactus")}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function Header() {
  const handleClickMenuOpen = () => {
    document
      .querySelector(".navigation-menu")!
      .classList.toggle("navbar-menu-open");
    document.body.classList.toggle("overflow-y-hidden-fixed");
  };

  return (
    <header id="main-header">
      <div className="container-fluid">
        <div className="navigation-bar mx-5 container mx-auto ">
          <div className="logo-location">
            <div className="logo ">
              <a href="/">
                {/* <h2 className="font-bold text-[12px] sm:text-[14px]">
                  AEROLEX&nbsp;
                  <span className="text-primary">PHARMACEUTICALS</span>
                </h2> */}
                <Image
                  src={Logo}
                  height={200}
                  width={200}
                  alt="images"
                  className="py-2"
                />
              </a>
            </div>
          </div>
          <button
            className="realestate-not-filled-btn"
            onClick={handleClickMenuOpen}
          >
            <HiOutlineBars3CenterLeft size={24} />
          </button>
          <div className="navigation-menu">
            <Navbar handleClickMenuOpen={handleClickMenuOpen} />
          </div>
          <div className="navigation-menu">
            <div className="navigation-buttons mr-3">
              <Link
                href={"tel:7906527876"}
                className="flex items-center gap-2 bg-primary text-white py-2 rounded-full px-5 "
              >
                <BsFillTelephoneFill size={16} color="white" />
                <p className="text-sm">8958&nbsp;755&nbsp;725</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
