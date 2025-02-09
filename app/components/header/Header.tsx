import { Link, useLocation } from "@remix-run/react";
import Typography from "../typography/Typography";

export default function Header() {
  const location = useLocation();
  const background = location.pathname !== "/";

  return (
    <header className="min-h-2 top-0 leading-5 z-[1000] min-w-full overflow-visible py-2 pl-6 pr-9 absolute ">
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
            className="h-full w-auto object-contain"
            src="/5er_logo.png"
            alt="logo"
          />
        </Link>

        <div className="hidden lg:flex flex-row items-end gap-1 text-lg">
          <div className="py-0 px-2 relative">
            <Link target="_self" to="/" rel="noreferrer">
              <Typography
                variant="h5"
                className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                DOMOV
              </Typography>
            </Link>
          </div>
          <div className="py-0 px-2 relative">
            <Link target="_self" to="/ponudba" rel="noreferrer">
              <Typography
                variant="h5"
                className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                PONUDBA
              </Typography>
            </Link>
          </div>
          <div className="py-0 px-2 relative">
            <Link target="_self" to="/" rel="noreferrer">
              <Typography
                variant="h5"
                className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                UVOZ VOZIL
              </Typography>
            </Link>
          </div>
          <div className="py-0 px-2 relative">
            <Link target="_self" to="/" rel="noreferrer">
              <Typography
                variant="h5"
                className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                FINANCIRANJE
              </Typography>
            </Link>
          </div>
          <div className="py-0 mb-2 px-4 relative border border-white rounded-lg">
            <Link target="_self" to="/#kontakt" rel="noreferrer">
              <Typography
                variant="h5"
                className="font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full [&&]:my-2"
              >
                KONTAKT
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
