import { useUserContext } from "../context/userContext";
import Link from "next/link";
//HiOutlineMenuAlt2
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Button from "./Button";
import Header from "./Header";
import { useRouter } from "next/router";

function Dashboard() {
  const { user, logOutUser } = useUserContext();
  const router = useRouter();
  return (
    <div className=" overflow-hidden background">
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
              className=" overflow-hidden font-bold mt-2 "
            >
              {user.displayName}
            </h1>
            <h1
              data-aos-duration="500"
              data-aos="fade-right"
              data-aos-delay="800"
              className=" overflow-hidden mt-2"
            >
              Welcome back.
            </h1>
          </div>
          <div
            data-aos-duration="900"
            data-aos="fade-left"
            data-aos-delay="1000"
            className=" overflow-hidden ml-20 sm:0  mt-10 w-52 "
          >
            <img src="svg/coder.svg" alt="" />
          </div>
        </div>
        <div className="  mt-20 flex flex-col w-full items-center justify-center  ">
          <Link href="/fybca">
            <button
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos="fade-up"
              className=" overflow-hidden button"
            >
              First Year
            </button>
          </Link>
          <Link href="/sybca">
            <button
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos="fade-up"
              className=" overflow-hidden button"
            >
              Second Year
            </button>
          </Link>
          <Link href="/tybca">
            <button
              data-aos-duration="500"
              data-aos="fade-up"
              data-aos-delay="400"
              className="overflow-hidden button"
            >
              Third Year
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
