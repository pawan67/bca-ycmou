import Head from "next/head";
import Image from "next/image";
import Dashboard from "../components/Dashboard";
import Loading from "../components/Loading";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useUserContext } from "../context/userContext";
import styles from "../styles/Home.module.css";
//pawan67@gmail.com 12345678
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function Home() {
  const { loading, error, user } = useUserContext();
  useEffect(() => {
    AOS.init();
  });
  // console.log(user.photoURL);

  return (
    <>
      <Head>
        <title>Home</title>

        <meta name="title" content="Website for YCMOU BCA Students." />
        <meta
          name="description"
          content="Here You can find Syllabus, Important notes and Previous year question papers."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bca-ycmou.vercel.app/" />
        <meta property="og:title" content="Website for YCMOU BCA Students." />
        <meta
          property="og:description"
          content="Here You can find Syllabus, Important notes and Previous year question papers."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dewctbby3/image/upload/v1642178377/Website_for_YCMOU_BCA_Students._dba2kd.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bca-ycmou.vercel.app/" />
        <meta
          property="twitter:title"
          content="Website for YCMOU BCA Students."
        />
        <meta
          property="twitter:description"
          content="Here You can find Syllabus, Important notes and Previous year question papers."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dewctbby3/image/upload/v1642178377/Website_for_YCMOU_BCA_Students._dba2kd.jpg"
        ></meta>
      </Head>
      <div>
        <div>
          {error && (
            <p className=" font-semibold shadow-sm  text-center font-nunito fixed w-full   text-[#f3e7e7] bg-red-600 p-1  ">
              {error}
            </p>
          )}
          {loading ? <Loading /> : <>{user ? <Dashboard /> : <SignUp />}</>}
        </div>
      </div>
    </>
  );
}
