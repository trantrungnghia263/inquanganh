import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// IMAGE
import logo from "../assets/logo/Logo QA-01.png";

function MenuHamburger({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  const menus = [
    { title: "Trang chủ", link: "/" },
    { title: "Giới thiệu", link: "/gioi-thieu" },
    {
      title: "Dịch vụ in",
      link: "/danh-muc-in",
      sub_menu: [
        {
          sub_title: "In tem nhãn tại Hà Nội",
          sub_link: "/danh-muc-in/in-tem-nhan-tai-ha-noi",
        },
        {
          sub_title: "In voucher tại Hà Nội",
          sub_link: "/danh-muc-in/in-voucher-tai-ha-noi",
        },
        {
          sub_title: "In phong bì tại Hà Nội",
          sub_link: "/danh-muc-in/in-phong-bi-tai-ha-noi",
        },
        {
          sub_title: "In giấy mời tại Hà Nội",
          sub_link: "/danh-muc-in/in-giay-moi-tai-ha-noi",
        },
        {
          sub_title: "In catalog tại Hà Nội",
          sub_link: "/danh-muc-in/in-catalog-tai-ha-noi",
        },
        {
          sub_title: "In cardvisit tại Hà Nội",
          sub_link: "/danh-muc-in/in-cardvisit-tai-ha-noi",
        },
        {
          sub_title: "In bạt hilex tại Hà Nội",
          sub_link: "/danh-muc-in/in-bat-hiflex-tai-ha-noi",
        },
        {
          sub_title: "In decal pp tại Hà Nội",
          sub_link: "/danh-muc-in/in-decal-pp-tai-ha-noi",
        },
        {
          sub_title: "In lụa - canvas tại Hà Nội",
          sub_link: "/danh-muc-in/in-lua-canvas-tai-ha-noi",
        },
        {
          sub_title: "In backlit tại Hà Nội",
          sub_link: "/danh-muc-in/in-backlit-tai-ha-noi",
        },
        {
          sub_title: "In băng rôn tại Hà Nội",
          sub_link: "/danh-muc-in/in-bang-ron-tai-ha-noi",
        },
        {
          sub_title: "In hastag cầm tay tại Hà Nội",
          sub_link: "/danh-muc-in/in-hastag-cam-tay-tai-ha-noi",
        },
        {
          sub_title: "In standee tại Hà Nội",
          sub_link: "/danh-muc-in/in-standee-tai-ha-noi",
        },
      ],
    },
    { title: "Tin tức", link: "/tin-tuc" },
    { title: "Liên hệ", link: "/lien-he" },
  ];

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={
        "menu-hamburger fixed z-10 bg-gray-900 bg-opacity-25 inset-0 overflow-hidden transition-opacity duration-500 ease-in-out " +
        (isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none")
      }
    >
      <div
        className={
          "menu-hamburger__inner w-4/5 md:w-3/5 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="menu-hamburger__content px-4">
          <div className="menu-hamburger__head flex items-center justify-between py-4">
            <Link to="/" className="menu-hamburger__logo block">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
            <div
              className="menu-hamburger__close w-7 h-7 border flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M18 18L6 6"
                />
              </svg>
            </div>
          </div>
          <ul className="menu-hamburger__list py-4">
            {menus.map((item, index) => (
              <li
                id={item.title}
                className="menu-hamburger__item border-t last:border-b"
                key={index}
                onClick={() => {
                  if (!item.sub_menu) {
                    setIsOpen(false);
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <Link
                    to={item.link}
                    className={`menu-hamburger__link block py-2.5 text-base font-semibold uppercase ${
                      location.pathname === item.link
                        ? "text-red-700"
                        : "text-gray-500"
                    }`}
                    onClick={() => item.sub_menu && toggleSubMenu(index)}
                  >
                    {item.title}
                  </Link>
                  {item.sub_menu && (
                    <button
                      className="accordion-toggle ml-2 focus:outline-none"
                      onClick={() => toggleSubMenu(index)}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 font-semibold ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.sub_menu && (
                  <ul
                    className={`submenu pl-3 transition-all duration-500 ease-in-out overflow-y-auto max-h-[300px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 ${
                      activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {item.sub_menu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="menu-hamburger__sub-item first:pt-1 last:pb-1"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link
                          to={subItem.sub_link}
                          className="block pb-2.5 text-sm text-gray-500 uppercase font-semibold"
                        >
                          {subItem.sub_title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuHamburger;
