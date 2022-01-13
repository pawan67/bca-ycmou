import Head from "next/head";
import Image from "next/image";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useUserContext } from "../context/userContext";
import styles from "../styles/Home.module.css";
import Dashboard from "../components/Dashboard";
import Loading from "../components/Loading";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function Signin() {
  useEffect(() => {
    AOS.init();
  });
  const { loading, error, user } = useUserContext();
  return (
    <div>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap');
        </style>
      </Head>
      <div>
        <div>
          {error && (
            <p className=" font-semibold shadow-sm  text-center font-nunito fixed w-full   text-[#f3e7e7] bg-red-600 p-1  ">
              {error}
            </p>
          )}
          {loading ? <Loading /> : <>{user ? <Dashboard /> : <SignIn />}</>}
        </div>
      </div>
    </div>
  );
}

export default Signin;
