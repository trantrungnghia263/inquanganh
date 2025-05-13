import React from "react";
import { Link } from "react-router-dom";

function NavSidebar() {
  const navigations = [
    {
      title: "In tem nhãn tại Hà Nội",
      link: "/danh-muc-in/in-tem-nhan-tai-ha-noi",
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
          {navigations.map((item, index) => (
            <li
              className="nav-sidebar__item transition duration-300 px-4 py-3 text-sm text-slate-700 uppercase border-b last:border-b-0 hover:bg-slate-100 hover:cursor-pointer"
              key={index}
            >
              <Link to={item.link} className="nav-sidebar__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavSidebar;
