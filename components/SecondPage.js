import Link from "next/link";
import Header from "./Header";
function SecondPage() {
  return (
    <div className=" background">
      <div className=" innerdiv">
        <Header />
        <div className=" space-y-4 mt-32">
          <Link href="">
            <button className=" button"> Syllabus</button>
          </Link>
          <Link href="">
            <button className=" button"> Books PDF </button>
          </Link>
          <Link href="">
            <button className=" button"> Previous Year questions</button>
          </Link>
        </div>
        <div className=" mt-20 ">
          <img src="svg/teaching.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
