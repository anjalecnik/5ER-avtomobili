/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useLocation } from "@remix-run/react";
import Typography from "../typography/Typography";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const background = location.pathname !== "/";

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="min-h-2 top-0 leading-5 z-[1000] min-w-full overflow-visible py-2 pl-6 pr-9 absolute">
        {background && (
          <div className="absolute inset-0 w-full h-full z-[-1] header">
            <img
              src="/hero-lamborghini.jpg"
              alt="Header Background"
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        <div className="flex justify-between">
          <Link to="/" className="h-20 flex select-none">
            <img
              className="h-full w-auto object-contain max-md:max-w-[90%]"
              src="/5er_logo.png"
              alt="logo"
            />
          </Link>

          <div className="hidden lg:flex flex-row items-end gap-1 text-lg">
            {["DOMOV", "PONUDBA", "UVOZ VOZIL", "FINANCIRANJE", "KONTAKT"].map(
              (item, index) => (
                <div className="py-0 px-2 relative" key={index}>
                  <Link
                    target="_self"
                    to={
                      item === "DOMOV"
                        ? "/"
                        : `/${item.toLowerCase().replace(/ /g, "")}`
                    }
                    rel="noreferrer"
                  >
                    <Typography
                      variant="h5"
                      className="text-white font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item}
                    </Typography>
                  </Link>
                </div>
              )
            )}
          </div>

          {/* Mobile menu */}
          <div className="flex flex-row items-center lg:hidden">
            <button
              className="pl-3 max-h-8 fill-semantic-background-top burger-menu"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <FaBars className="h-8 w-8 text-white right-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${
          openMenu ? "translate-x-0" : "translate-x-full"
        } h-screen w-full fixed right-0 top-0 z-[9999999] bg-semantic-background-base ease-in-out duration-300 overflow-hidden flex flex-col items-center justify-center`}
      >
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setOpenMenu(false)}
        >
          <FaWindowClose className="h-8 w-8 text-white" />
        </div>

        <nav className="flex flex-col items-center gap-8">
          {["DOMOV", "PONUDBA", "UVOZ VOZIL", "FINANCIRANJE", "KONTAKT"].map(
            (item, index) => (
              <Link
                key={index}
                to={
                  item === "DOMOV"
                    ? "/"
                    : `/${item.toLowerCase().replace(/ /g, "")}`
                }
                onClick={() => setOpenMenu(false)}
              >
                <Typography
                  variant="h3"
                  className="text-white font-medium relative"
                >
                  {item}
                </Typography>
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
