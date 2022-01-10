import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" m-5 ">
      <object
        className=" p-2 border-2 shadow-lg rounded-xl"
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
      <embed className=" rounded-xl" src="4th_sem_Java.pdf" width= "500" height= "375"></embed>
      <h1>Hello world</h1>
    </div>
  );
}
