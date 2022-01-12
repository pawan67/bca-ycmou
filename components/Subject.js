import { useState } from "react";

function Subject() {
  const [sub, setSub] = useState();
//   if (sub === "eng") {
//     return (
//       <div>
//           <div>
//               <a href="pdf/syllabus/English_Communication.pdf">Download PDF</a>
//           </div>
//         <img className=" mt-10 rounded-md" src="img/english.png" alt="" />
//       </div>
//     );
//   }
  return (
    <div className=" space-y-5  mt-20">
      <button onClick={() => setSub("eng")} className="button">
        English Communication
      </button>
      <button className="button">Mathematics</button>
      <button className="button">Problem solving using computers</button>
      <button className="button">Programming with C++</button>
    </div>
  );
}

export default Subject;
