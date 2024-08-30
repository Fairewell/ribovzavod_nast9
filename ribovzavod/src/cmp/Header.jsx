import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaVk, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { react } from "../assets";

const Header = () => {
    const [active, setActive] = useState("main");
    const [toggle, setToggle] = useState(false);

    const navLinks = [
        {
          id: "main",
          title: "Главная",
          isSTR: true,
        },
        {
          id: "products",
          title: "Продукция",
          isSTR: true,
        },
        {
          id: "partners",
          title: "Партнеры",
          isSTR: true,
        },
        {
          id: "about",
          title: "О нас",
          isSTR: true,
        },
      ];

    const extLinks = [
        {
          id: "vk",
          "title": "VK",
          "icon": FaVk,
          "link": "https://vk.com/hornyh0le"
        },
        {
          id: "insta",
          "title": "Instagramm",
          "icon": FaInstagram,
          "link": "https://instagram.com/azumaq"
        },
        {
          id: "twitter",
          "title": "Twitter",
          "icon": FaTwitter,
          "link": "https://x.com/comrade_azu"
        },
        {
          id: "insta",
          "title": "Instagramm",
          "icon": FaFacebook,
          "link": "https://instagram.com/exxo"
        }
      ]

    return(
        <>
            <nav className="min-w-full w-full flex py-6 justify-between items-center navbar bg-white p-20">
                {/*TODO: ДОБАВИТЬ ПУТЬ К ЛОГО <img src={logo} alt="jsxgames" className="w-[240px] h-[32px]" />*/}

                <ul className="list-none sm:flex hidden justify-start items-center flex-1 pl-20 pr-20">
                    {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`transition-all hover:text-[19px] font-raleway font-semibold cursor-pointer text-[16px] hover:text-[#FF4000] hover:font-bold ${active === nav.title ? "text-yellow" : "text-black"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        {nav.isSTR ? <Link to={`/${nav.id}`}>{nav.title}</Link> : <a href={`#${nav.id}`}>{nav.title}</a>}
                    </li>
                    ))}
                </ul>

                {/* Вывод ссылок на социальные сети */}
                <div className="xs:hidden sm:flex sm:items-center">
                    {extLinks.map((extLink) => (
                    <a key={extLink.id} href={extLink.link} className="ml-4 text-black hover:text-[]">
                        <extLink.icon size={24} />
                    </a>
                    ))}
                </div>

                {/* Мобильное меню */}
            </nav>
        </>
    )
}

export default Header;