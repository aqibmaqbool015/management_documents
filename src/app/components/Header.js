import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const image = {
    logo: "/logo.svg",
    bell: "/bell.svg",
    user: "/user.svg",
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <span>
              <Image
                src={image.logo}
                alt="Logo"
                className="md:w-[140px] w-[110px] h-auto"
                width={140}
                height={70}
              />
            </span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="px-2 text-customColorNav text-[15px] font-medium hover:text-customBlue hover:underline underline-offset-8"
            >
              HOME
            </Link>
            <Link
              href="/auction"
              className="px-2 text-customColorNav text-[15px] font-medium hover:text-customBlue hover:underline underline-offset-8"
            >
              AUCTION
            </Link>
            <Link
              href="/chats"
              className="px-2 text-customColorNav text-[15px] font-medium hover:text-customBlue hover:underline underline-offset-8"
            >
              CHATS
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <span>
              <Image
                src={image.bell}
                alt="Bell"
                className="w-[18px] h-auto"
                width={18}
                height={18}
              />
            </span>
            <button className="bg-customBlue text-white py-2 px-5 rounded-[25px] font-medium">
              + SELL
            </button>
            <div className="flex items-center">
              <span>
                <Image
                  src={image.user}
                  alt="User"
                  className="w-[22px] h-auto"
                  width={22}
                  height={22}
                />
              </span>
              <Link
                href="/login"
                className="text-customColorNav text-[16px] font-medium mx-2"
              >
                Login /{" "}
              </Link>
              <Link
                href="/signup"
                className="text-customColorNav text-[16px] font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white shadow-lg`}
        >
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="px-2 text-customColorNav text-[16px] font-medium hover:text-customBlue hover:underline underline-offset-8"
            >
              HOME
            </Link>
            <Link
              href="/auction"
              className="px-2 text-customColorNav text-[16px] font-medium hover:text-customBlue hover:underline underline-offset-8"
            >
              AUCTION
            </Link>
            <Link
              href="/chats"
              className="px-2 text-customColorNav text-[16px] font-medium hover:text-customBlue hover:underline underline-offset-8"
            >
              CHATS
            </Link>
            <div className="flex items-center">
              <span>
                <Image
                  src={image.user}
                  alt="User"
                  className="w-[22px] h-auto"
                  width={22}
                  height={22}
                />
              </span>
              <Link
                href="/login"
                className="text-customColorNav text-[16px] font-medium mx-2"
              >
                Login /{" "}
              </Link>
              <Link
                href="/signup"
                className="text-customColorNav text-[16px] font-medium"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
