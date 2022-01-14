import Header from "../components/Header";
import { useUserContext } from "../context/userContext";

function Syllabus() {
  const { subject, setSubject } = useUserContext();
  console.log(subject);
  return (
    <div className="  background">
      <div className="innerdiv">
        <div className=" flex justify-between">
          <Header />
          <div className=" bg-green-300 text-black rounded-lg px-3 py-1 font-semibold ">
            <a href={`pdf/syllabus/${subject}.pdf`}>Download pdf</a>
          </div>
        </div>
        <div className=" mt-5">
          <img className=" rounded-xl" src={`img/${subject}.png`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
