import Header from "./Header";
import Link from "next/link";
function FirstPage({ firstLink, secondLink, firstSem, secondSem }) {
  return (
    <div>
      <div className=" background">
        <div className=" innerdiv">
          <Header />
          <div className=" w-64 mx-auto mt-20">
            <img src="svg/coding.svg" alt="" />
          </div>
          <div className=" space-y-5 mt-36">
            <Link href={firstLink}>
              <button className=" button">{firstSem}</button>
            </Link>
            <Link href={secondLink}>
              <button className=" button">{secondSem}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
