import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={'/'}>
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 flex gap-2"
            ><img src='./logo.png' className='w-6'/>
              MotionDrop
            </Typography>
          </Link>
          <div className="block md:hidden">
            <ul className="my-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                  Pages
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                  Account
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                  Blocks
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                  Docs
                </a>
              </Typography>
            </ul>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent hidden md:block"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <ul className="my-2 flex !flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                Pages
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                Account
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                Blocks
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                Docs
              </a>
            </Typography>
          </ul>
        </Collapse>
      </Navbar>
      <div>
      </div>
    </div>
  )
}

export default Header