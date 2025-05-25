import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Logo QA-01.png";

function MenuHamburger({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null); // main menu
  const [activeSubChildIndex, setActiveSubChildIndex] = useState({}); // sub-child per sub-menu

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
          sub_child_menu: [
            {
              sub_child_title: "In tem vỡ bảo hành tại Hà Nội",
              sub_child_link: "/danh-muc-in/in-tem-vo-bao-hanh-tai-ha-noi",
            },
            {
              sub_child_title: "In tem decal giấy tại Hà Nội",
              sub_child_link: "/danh-muc-in/in-tem-decal-giay-tai-ha-noi",
            },
            {
              sub_child_title: "In tem 7 màu tại Hà Nội",
              sub_child_link: "/danh-muc-in/in-tem-7-mau-tai-ha-noi",
            },
            {
              sub_child_title: "In tem decal tráng kim tại Hà Nội",
              sub_child_link: "/danh-muc-in/in-tem-decal-trang-kim-tai-ha-noi",
            },
            {
              sub_child_title: "In tem decal nhựa chống nước tại Hà Nội",
              sub_child_link:
                "/danh-muc-in/in-tem-decal-nhua-chong-nuoc-tai-ha-noi",
            },
            {
              sub_child_title: "In tem decal trong tại Hà Nội",
              sub_child_link: "/danh-muc-in/in-tem-decal-trong-tai-ha-noi",
            },
          ],
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
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const toggleSubChildMenu = (parentIndex, subIndex) => {
    setActiveSubChildIndex((prev) => ({
      ...prev,
      [parentIndex]: prev[parentIndex] === subIndex ? null : subIndex,
    }));
  };

  return (
    <div
      className={`menu-hamburger fixed z-10 bg-gray-900 bg-opacity-25 inset-0 overflow-hidden transition-opacity duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`menu-hamburger__inner w-full md:w-3/5 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
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
                className="w-4 h-4 text-gray-500"
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
                key={index}
                className="menu-hamburger__item border-t last:border-b"
              >
                <div className="flex justify-between items-center">
                  <Link
                    to={item.link}
                    onClick={(e) => {
                      if (item.sub_menu) {
                        e.preventDefault();
                        toggleSubMenu(index);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className={`menu-hamburger__link block py-2.5 text-base font-semibold uppercase ${
                      location.pathname === item.link
                        ? "text-red-700"
                        : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </Link>

                  {item.sub_menu && (
                    <button
                      onClick={() => toggleSubMenu(index)}
                      className="ml-2"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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

                {/* Sub Menu */}
                {item.sub_menu && activeIndex === index && (
                  <ul className="submenu transition-all py-1 overflow-y-auto max-h-[300px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
                    {item.sub_menu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="menu-hamburger__sub-item py-2"
                      >
                        <div className="flex justify-between items-center">
                          <Link
                            to={subItem.sub_link}
                            onClick={(e) => {
                              if (subItem.sub_child_menu) {
                                e.preventDefault();
                                toggleSubChildMenu(index, subIndex);
                              } else {
                                setIsOpen(false);
                              }
                            }}
                            className="block text-sm text-gray-500 uppercase font-semibold"
                          >
                            {subItem.sub_title}
                          </Link>

                          {subItem.sub_child_menu && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSubChildMenu(index, subIndex);
                              }}
                              className="ml-2"
                            >
                              <svg
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  activeSubChildIndex[index] === subIndex
                                    ? "rotate-180"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
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

                        {/* Sub-child menu */}
                        {subItem.sub_child_menu &&
                          activeSubChildIndex[index] === subIndex && (
                            <ul className="submenu pt-2 pl-4">
                              {subItem.sub_child_menu.map(
                                (child, childIndex) => (
                                  <li
                                    key={childIndex}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2"
                                  >
                                    <Link
                                      to={child.sub_child_link}
                                      className="block text-sm uppercase text-gray-500 font-semibold"
                                    >
                                      {child.sub_child_title}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
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
