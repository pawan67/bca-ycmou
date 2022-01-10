import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" m-5 ">
      <object
        className=" shadow-lg rounded-xl"
        data="4th_sem_Java.pdf"
        type="application/pdf"
        width="500px"
        height="600px"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="4th_sem_Java.pdf">to the PDF!</a>
        </p>
      </object>
      <h1>Hello world</h1>
    </div>
  );
}
