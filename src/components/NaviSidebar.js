import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavSidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubNav = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigations = [
    {
      title: "In tem nhãn tại Hà Nội",
      link: "/danh-muc-in/in-tem-nhan-tai-ha-noi",
      sub_navigations: [
        {
          sub_title: "In tem vỡ bảo hành tại Hà Nội",
          sub_link: "/danh-muc-in/in-tem-vo-bao-hanh-tai-ha-noi",
        },
        {
          sub_title: "In tem decal giấy tại Hà Nội",
          sub_link: "/danh-muc-in/in-tem-decal-giay-tai-ha-noi",
        },
        {
          sub_title: "In tem 7 màu tại Hà Nội",
          sub_link: "/danh-muc-in/in-tem-7-mau-tai-ha-noi",
        },
        {
          sub_title: "In tem decal tráng kim tại Hà Nội",
          sub_link: "/danh-muc-in/in-tem-decal-trang-kim-tai-ha-noi",
        },
        {
          sub_title: "In tem decal nhựa chống nước tại Hà Nội",
          sub_link: "/danh-muc-in/in-tem-decal-nhua-chong-nuoc-tai-ha-noi",
        },
        {
          sub_title: "In tem decal trong tại Hà Nội",
          sub_link: "/danh-muc-in/in-tem-decal-trong-tai-ha-noi",
        },
      ],
    },
    {
      title: "In voucher tại Hà Nội",
      link: "/danh-muc-in/in-voucher-tai-ha-noi",
    },
    {
      title: "In phong bì tại Hà Nội",
      link: "/danh-muc-in/in-phong-bi-tai-ha-noi",
    },
    {
      title: "In giấy mời tại Hà Nội",
      link: "/danh-muc-in/in-giay-moi-tai-ha-noi",
    },
    {
      title: "In catalog tại Hà Nội",
      link: "/danh-muc-in/in-catalog-tai-ha-noi",
    },
    {
      title: "In cardvisit tại Hà Nội",
      link: "/danh-muc-in/in-cardvisit-tai-ha-noi",
    },
    {
      title: "In backlit tại Hà Nội",
      link: "/danh-muc-in/in-backlit-tai-ha-noi",
    },
    {
      title: "In lua - canvas tại Hà Nội",
      link: "/danh-muc-in/in-lua-canvas-tai-ha-noi",
    },
    {
      title: "In standee tại Hà Nội",
      link: "/danh-muc-in/in-standee-tai-ha-noi",
    },
    {
      title: "In backdrop tại Hà Nội",
      link: "/danh-muc-in/in-backdrop-tai-ha-noi",
    },
  ];

  return (
    <div className="nav-sidebar">
      <div className="nav-sidebar__content">
        <div className="nav-sidebar__title text-white text-base uppercase py-3 px-4 bg-red-700">
          <p>Danh mục in</p>
        </div>
        <ul className="nav-sidebar__list bg-slate-50">
          {navigations.map((item, index) => {
            const hasSubNav =
              item.sub_navigations && item.sub_navigations.length > 0;
            const isOpen = openIndex === index;

            return (
              <li
                className="nav-sidebar__item transition group duration-300 px-4 py-3 text-sm text-slate-700 uppercase border-b last:border-b-0 hover:bg-slate-100"
                key={index}
              >
                <div
                  className={`nav-sidebar__link flex items-center justify-between cursor-pointer`}
                  onClick={() => (hasSubNav ? toggleSubNav(index) : null)}
                >
                  <Link to={item.link}>{item.title}</Link>
                  {hasSubNav && (
                    <svg
                      className={`w-4 h-4 text-slate-700 transition duration-300 transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>

                {hasSubNav && isOpen && (
                  <ul className="nav-sidebar__sublist pt-2">
                    {item.sub_navigations.map((sub_item, sub_index) => (
                      <li
                        className="transition duration-300 px-4 py-2 text-sm text-slate-700 uppercase hover:bg-white"
                        key={sub_index}
                      >
                        <Link to={sub_item.sub_link}>{sub_item.sub_title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavSidebar;
