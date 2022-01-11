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
    <div className=" background">
      <div className=" innerdiv">
        <Header />
        <div className=" sm:mt-20 flex  flex-col">
          <div className="  mt-10 text-3xl">
            <h1 className=" font-bold  text-3xl">Hey,</h1>
            <h1 className=" font-bold mt-2 ">{user.displayName}</h1>
            <h1 className=" mt-2">Welcome back.</h1>
          </div>
          <div className=" ml-20 sm:0  mt-10 w-52 ">
            <img src="svg/coder.svg" alt="" />
          </div>
        </div>
        <div className=" mt-20 flex flex-col w-full items-center justify-center  ">
          <button onClick={() => router.push("/firstyear")} className=" button">First Year</button>
          <button onClick={() => router.push("/firstyear")} className=" button">Second Year</button>
          <button onClick={() => router.push("/firstyear")} className=" button">Third Year</button>

         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
