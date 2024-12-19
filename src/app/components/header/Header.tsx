"use client";
import { ImagePath } from "@/app/utils/images.path";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/app/assets/images/Logo.png";
import "./header.css";
import { Button } from "@/app/components/buttons/Button";
import Divider from "@mui/material/Divider";
import { BiChevronDown, BiChevronRight, BiSearchAlt2 } from "react-icons/bi";
import { LuChevronUp, LuSearch } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";

import { VscTools } from "react-icons/vsc";
import { MdViewInAr } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa6";
import { RiHomeHeartLine } from "react-icons/ri";
import { TbCreditCardPay } from "react-icons/tb";
import { VscArrowSwap } from "react-icons/vsc";
import { BsFillTelephoneFill, BsTicketPerforated } from "react-icons/bs";
import Image from "next/image";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { Span } from "next/dist/trace";

const dropDownListBoxes = [
  {
    title: "By Dosage Form",
    links: [
      { title: "Respules", href: "/respules" },
      { title: "Soaps", href: "/soaps" },
      { title: "Dusting Powder", href: "/dusting-powder" },
      { title: "Sprays Ointments", href: "/sprays-ointments" },
      { title: "Lotions", href: "/lotions" },
      { title: "Creams", href: "/creams" },
      { title: "Ointments", href: "/ointments" },
      { title: "Nasal Sprays & Drops", href: "/nasal-sprays-drops" },
      { title: "Dry Syrup", href: "/dry-syrup" },
      { title: "Eye Ear Drops", href: "/eye-ear-drops" },
      { title: "Injectables", href: "/injectables" },
      { title: "Pediatric Drops", href: "/pediatric-drops" },
      { title: "Suspension", href: "/suspension" },
      { title: "Capsule", href: "/capsule" },
      { title: "Syrups", href: "/syrups" },
      { title: "Cardiac Diabetic", href: "/cardiac-diabetic" },
      { title: "Tablets", href: "/tablets" },
      { title: "Sachets", href: "/sachets" },
      { title: "Misc. Products", href: "/misc-products" },
      { title: "Ayurvedic Products", href: "/ayurvedic-products" },
      { title: "Antihistamines Range", href: "/antihistamines-range" },
      { title: "Skin Care Range", href: "/skin-care-range" },
      { title: "Infusions", href: "/infusions" },
    ],
  },
  {
    title: "By Therapy wise",
    links: [
      { title: "Critical Care Range", href: "/critical-care-range" },
      { title: "Derma Products Range", href: "/derma-products-range" },
      { title: "Ayurvedic Products Range", href: "/ayurvedic-products-range" },
      { title: "Anti Inflammatory Range", href: "/anti-inflammatory-range" },
      { title: "Analgesic Range", href: "/analgesic-range" },
      { title: "Antibiotics Range", href: "/antibiotics-range" },
      { title: "Anticold Range", href: "/anticold-range" },
      { title: "Anti Ulcer Range", href: "/anti-ulcer-range" },
      { title: "Anti Allergics Range", href: "/anti-allergics-range" },
      { title: "Anti Flatulent Range", href: "/anti-flatulent-range" },
      { title: "Antifungal Range", href: "/antifungal-range" },
      { title: "Anti Cough Range", href: "/anti-cough-range" },
      { title: "Anti Spasmodic Range", href: "/anti-spasmodic-range" },
      { title: "Antispasmodic Range", href: "/antispasmodic-range" },
      { title: "Orthopedic Range", href: "/orthopedic-range" },
      { title: "Dental Range", href: "/dental-range" },
      { title: "Gynaecological Range", href: "/gynaecological-range" },
      { title: "Neurology Range", href: "/neurology-range" },
      { title: "Gastro Range", href: "/gastro-range" },
      { title: "Liver Care Range", href: "/liver-care-range" },
      { title: "ENT Range", href: "/ent-range" },
      { title: "Hepato Range", href: "/hepato-range" },
      { title: "Paediatric Range", href: "/paediatric-range" },
      { title: "Derma Range", href: "/derma-range" },
      {
        title: "Nutritional Supplements Range",
        href: "/nutritional-supplements-range",
      },
      { title: "Cardiac BP Range", href: "/cardiac-bp-range" },
      { title: "Psychiatric Range", href: "/psychiatric-range" },
      { title: "Diabetic Range", href: "/diabetic-range" },
    ],
  },
];

let MENU = [
  {
    title: "Products",
    link: "/products",
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

const Navbar = (handleClickMenuOpen:any) => {
  const [active, setActive] = useState<any>();

  return (
    <nav className="navbar-menu ">
      <ul className="navbar-menu-items">
        <li className="navbar-menu-item" onClick={handleClickMenuOpen}>
          <Link href={"/"} className="nav-item " >
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
              <Link href={item.link} className="menu-item " >
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
                                    onClick={handleClickMenuOpen}
                                  >
                                    <Link href="/" >{subb.title}</Link>
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
        <li className="navbar-menu-item" onClick={handleClickMenuOpen}>
          <Link href={"/aboutus"} className="nav-item" >
            About Us
          </Link>
          <Link href={"/contactus"} className="nav-item" >
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
                <Image src={Logo} height={200} width={200} alt='images' className="py-2"/>
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

            <Navbar handleClickMenuOpen={handleClickMenuOpen}/>
          </div>
          <div className="navigation-menu">
            <div className="navigation-buttons mr-3">
              <div className="flex items-center gap-2 bg-primary text-white py-2 rounded-full px-5 ">
                <BsFillTelephoneFill size={16} color="white" />
                <p className="text-sm">720&nbsp;320&nbsp;9150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
