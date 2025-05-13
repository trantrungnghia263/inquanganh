import React from "react";
import { useLocation, Link } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const listNav = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Giới thiệu",
      link: "/gioi-thieu",
    },
    {
      title: "Danh mục in",
      link: "/danh-muc-in",
      sub_menu: [
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
          title: "In bạt hiflex",
          link: "/danh-muc-in/in-bat-hiflex-tai-ha-noi",
        },
        {
          title: "In băng rôn",
          link: "/danh-muc-in/in-bang-ron-tai-ha-noi",
        },
        {
          title: "In decal ô tô",
          link: "/danh-muc-in/in-decal-o-to-tai-ha-noi",
        },
        {
          title: "In decal PP",
          link: "/danh-muc-in/in-decal-pp-tai-ha-noi",
        },
        {
          title: "In backlit",
          link: "/danh-muc-in/in-backlit-tai-ha-noi",
        },
        {
          title: "In lụa canvas",
          link: "/danh-muc-in/in-lua-canvas-tai-ha-noi",
        },
        {
          title: "In hastag cầm tay",
          link: "/danh-muc-in/in-hastag-cam-tay-tai-ha-noi",
        },
        {
          title: "In standee",
          link: "/danh-muc-in/in-standee-tai-ha-noi",
        },
        {
          title: "In backdrop",
          link: "/danh-muc-in/in-backdrop-tai-ha-noi",
        },
      ],
    },
    {
      title: "Tin tức",
      link: "/tin-tuc",
    },
    {
      title: "Liên hệ",
      link: "/lien-he",
    },
  ];

  return (
    <div className="nav">
      <ul className="nav__list flex">
        {listNav.map((item, index) => (
          <li
            className={`nav__item group relative transition duration-150 hover:bg-red-700 ${
              location.pathname === item.link ? "bg-red-700" : ""
            }`}
            key={index}
          >
            {/* Thẻ Link chỉ chứa tiêu đề */}
            <Link
              to={item.link}
              className="nav__link text-base uppercase text-white flex items-center gap-2 px-4 py-4"
            >
              <p>{item.title}</p>
              {item.sub_menu && (
                <div className="nav__icon flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white   transition duration-300 group-hover:rotate-180"
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
                      d="m8 10 4 4 4-4"
                    />
                  </svg>
                </div>
              )}
            </Link>

            {/* Sub menu được tách riêng */}
            {item.sub_menu && (
              <ul className="nav__sub-menu w-[550px] bg-red-700 absolute top-full left-0 z-10 opacity-0 translate-y-10 pointer-events-none transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto  grid grid-cols-2">
                {item.sub_menu.map((sub, subIndex) => (
                  <li
                    className={`nav__item transition duration-150 bg-red-700 hover:bg-red-800 ${
                      location.pathname === sub.link ? "bg-red-800" : ""
                    }`}
                    key={subIndex}
                  >
                    <Link
                      to={sub.link}
                      className="nav__link block text-sm uppercase text-white px-4 py-2"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
