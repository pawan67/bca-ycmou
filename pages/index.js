import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" m-5 ">
      <object
        className=" shadow-lg rounded-xl"
        data="4th_sem_ava.pdf"
        type="application/pdf"
        width="500px"
        height="600px"
      >
        <p>
          Sorry this browser does not support PDF 
          <a className=" ml-1 bg-green-100 p-2 rounded-md text-red-500" href="4th_sem_Java.pdf">Link to the PDF!</a>
        </p>
      </object>
      <iframe className=" rounded-md" id="pdfviewer" src="http://docs.google.com/gview?embedded=true&url=testing-wine-six.vercel.app/4th_sem_Java.pdf&amp;embedded=true"  width="500px" height="500px"></iframe>
      <h1>Hello world</h1>
    </div>
  );
}
