import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiCloseLine, RiArrowGoBackLine } from "react-icons/ri";
import { useUserContext } from "../context/userContext";

function Header({ backbtn }) {
  const { user, logOutUser } = useUserContext();
  const [menu, setMenu] = useState(false);
  const [backBtn, setBackBtn] = useState(false);
  // console.log(user.photoURL);
  if (menu) {
    return (
      <div className="  z-50 bg-white text-black top-0 left-0 right-0 bottom-0 w-screen min-h-screen fixed">
        <div className=" max-w-md mx-auto p-12  ">
          <RiCloseLine
            data-aos-duration="500"
            data-aos="fade-down-left"
            data-aos-delay="500"
            onClick={() => setMenu(false)}
            className=" text-5xl md:text-3xl 2xl:text-5xl float-right"
          />
          <div
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="100"
            className=" mt-28 md:mt-20 2xl:mt-32 w-[80%] mx-auto sm:mx-0 md:w-64 2xl:w-80 sm:w-80"
          >
            <img src="svg/landing.svg" alt="" />
          </div>

          <div className=" space-y-5 flex flex-col items-center mt-20">
            <Link href="/">
              <div
                data-aos-duration="300"
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-[#7cfed0] cursor-pointer transition-all  text-black flex justify-center font-nunito font-bold rounded-[20px] hover:shadow-xl px-4 sm:py-2 2xl:py-4 py-3 2xl:w-[320px]   w-[280px] m-2   "
              >
                Home
              </div>
            </Link>
            <div
              data-aos-duration="300"
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-[#7cfed0] cursor-pointer  text-black flex justify-center font-nunito font-bold rounded-[20px] hover:shadow-xl px-4 sm:py-2 2xl:py-4 py-3 2xl:w-[320px]  w-[280px] m-2  "
            >
              Have Suggestions ?
            </div>
            <Link href="/">
              <div
                data-aos-duration="300"
                data-aos="fade-up"
                data-aos-delay="500"
                onClick={logOutUser}
                className="bg-[#7cfed0] cursor-pointer text-black flex justify-center font-nunito font-bold rounded-[20px] hover:shadow-xl px-4 sm:py-2 2xl:py-4 py-3 2xl:w-[320px]  w-[280px] m-2  "
              >
                Sign Out
              </div>
            </Link>
          </div>
          <div className=" mx-auto flex justify-center mt-36  font-bold ">
            <div>
              Created By{" "}
              <a className=" underline " href="https://github.com/pawan67">
                @pawan67
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex justify-between">
      <HiOutlineMenuAlt2 onClick={() => setMenu(true)} className=" text-3xl" />
    </div>
  );
}

export default Header;
