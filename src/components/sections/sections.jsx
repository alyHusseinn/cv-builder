import { useState } from "react";
import html2pdf from "html2pdf.js";
import General from "./genInfo";
import Education from "./education";
import WorkExp from "./workExp";


function Sections({value, updateData}){
    const [secIdx, setSectionIdx] = useState(0);

    function downLoadCv(){
        const cv = document.querySelector('.preview');
        const Name = value.generalInfo.name.replaceAll(" ","_");
        const options = {
            margin: 0.5,
            filename: `${Name}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().set(options).from(cv).save();
    }
    return (
    <>
        <div className="sections">
            <div className="buttons">
                {<button onClick={downLoadCv}>Download</button>}
                {secIdx > 0 && <button onClick={() => setSectionIdx(secIdx - 1)}>Back</button>} 
                {secIdx < 2 && <button onClick={() => setSectionIdx(secIdx + 1)}>Next</button>}  
            </div>
            <div className="fields">
                {secIdx == 0 && <General info={value.generalInfo} updateInfo={(info) => updateData.setInfo(info)}/>}
                {secIdx == 1 && <Education info={value.education} updateInfo={(info) => updateData.setEdu(info)}/>}
                {secIdx == 2 && <WorkExp info={value.experience} updateInfo={(info) => updateData.setExp(info)}/>}
            </div>
            
        </div>
    </>
    );
}

export default Sections;