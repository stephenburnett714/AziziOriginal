import Link from "next/link";
import "../styles/index.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Logo */}
      <div className="pl-4 pt-4 z-1">
        <Image
          src="/images/logo.png"
          height="100"
          width="100"
          className="rounded-full"
        ></Image>
      </div>
      <div>
        <div className="flex flex-row pt-20 justify-center relative z-10">
          {/* Link Buttons */}
          <Link href={"/"}>
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full home-gradient flex items-center justify-center flex-wrap mr-2 shadow-xl cursor-pointer">
              <div className="text-center text-sm md:text-base adlib text-white">
                Home
              </div>
            </div>
          </Link>

          <Link href={"/fun_corner"}>
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full fun-gradient flex items-center justify-center flex-wrap mr-2 shadow-xl cursor-pointer">
              <div className="text-center text-sm md:text-base adlib text-white">
                Fun Corner
              </div>
            </div>
          </Link>

          <Link href={"/about"}>
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full about-gradient flex items-center justify-center flex-wrap mr-2 shadow-xl cursor-pointer">
              <div className="text-center text-sm md:text-base adlib text-white">
                About Us
              </div>
            </div>
          </Link>

          <Link href={"/author"}>
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full author-gradient flex items-center justify-center flex-wrap mr-2 shadow-xl cursor-pointer">
              <div className="text-center text-sm md:text-base adlib text-white">
                Author
              </div>
            </div>
          </Link>

          <Link href={"/books"}>
            <div className="h-14 w-14 md:h-20 md:w-20 rounded-full books-gradient flex items-center justify-center flex-wrap shadow-xl cursor-pointer">
              <div className="text-center text-sm md:text-base adlib text-white">
                Books
              </div>
            </div>
          </Link>
        </div>
        <div className="adlib text-3xl md:text-5xl pt-5 text-center azizi-green relative z-10 black-shadow">
          TWENDE! LET'S GO!
        </div>
        <div className="flex justify-center pb-5">
          <div className="w-10/12 p-5 pt-24 azizi-bg-orange md:-top-24 -top-20 relative">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <footer>
        <div className="grid grid-cols-7 azizi-bg-blue py-16">
          <div className="col-span-1 lg:col-span-2"></div>
          <div className="col-span-5 lg:col-span-3">
            <div className="grid-span-5 flex flex-col text-center">
              <div className="adlib text-4xl lg:text-6xl pb-4 text-white">
                Adventurous Azizi
              </div>
              <div className="pb-4 body-font text-2xl text-white">
                Contact Us!
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="flex justify-around content-center py-4 md:px-16">
                <a href="tel:6103311775">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "white" }}
                    size="3x"
                  />
                </a>
                <a href="mailto:info@azizikids.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white" }}
                    size="3x"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/AdventurousAzizi/"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "white" }}
                    size="3x"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/adventurousazizi/"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "white" }}
                    size="3x"
                  />
                </a>
              </div>
            </div>
            <div className="text-center text-xl body-font text-white">
              Copyright © Azizi Kids, LLC
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2"></div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
