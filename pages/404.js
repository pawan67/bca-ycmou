import Link from "next/link";
import Header from "../components/Header";

// pages/404.js
export default function Custom404() {
  return (
    <div className=" background ">
      <div className="innerdiv">
        <Header />

        <h1 className=" w-3/4 mx-auto text-center text-xl mt-36 mb-10">
          The Requested resource is not available... Sorry
        </h1>
        <Link href="/">
          <button className="button">Go back to home</button>
        </Link>
      </div>
    </div>
  );
}
