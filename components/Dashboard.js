import { useUserContext } from "../context/userContext";
import Link from "next/link";
//HiOutlineMenuAlt2
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Button from "./Button";
import Header from "./Header";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Dashboard() {
  const { user, logOutUser } = useUserContext();
  const router = useRouter();
  return (
    <div className=" background">
      <div className=" innerdiv">
        <Header />
        <div className=" sm:mt-20 flex  flex-col">
          <div className="  mt-10 text-3xl">
            <h1
              data-aos-duration="500"
              data-aos="fade-right"
              data-aos-delay="300"
              className=" font-bold  text-3xl"
            >
              Hey,
            </h1>
            <h1
              data-aos-duration="500"
              data-aos="fade-right"
              data-aos-delay="500"
              className=" font-bold mt-2 "
            >
              {user.displayName}
            </h1>
            <h1
              data-aos-duration="500"
              data-aos="fade-right"
              data-aos-delay="800"
              className=" mt-2"
            >
              Welcome back.
            </h1>
          </div>
          <div data-aos-duration="500"
              data-aos="fade-left"
              data-aos-delay="1000" className=" ml-20 sm:0  mt-10 w-52 ">
            <img src="svg/coder.svg" alt="" />
          </div>
        </div>
        <div className=" mt-20 flex flex-col w-full items-center justify-center  ">
          <button
            data-aos-duration="500"
            data-aos="zoom-in"
            onClick={() => router.push("/firstyear")}
            className=" button"
          >
            First Year
          </button>
          <button
            data-aos-duration="500"
            data-aos="zoom-in"
            onClick={() => router.push("/firstyear")}
            className=" button"
          >
            Second Year
          </button>
          <button
            data-aos-duration="500"
            data-aos="zoom-in"
            onClick={() => router.push("/firstyear")}
            className=" button"
          >
            Third Year
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
