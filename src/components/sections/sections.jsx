import { useState } from "react";
import General from "./genInfo";
import Education from "./education";
import WorkExp from "./workExp";
import DownloadCv from "./downloadcv";
import Skills from "./skills";


function Sections({value, updateData}){
    const [secIdx, setSectionIdx] = useState(0);
    
    return (
        <div className="sections">
            <div className="buttons">
                {secIdx > 0 && <button onClick={() => setSectionIdx(secIdx - 1)}>Back</button>} 
                {secIdx < 4 && <button onClick={() => setSectionIdx(secIdx + 1)}>Next</button>}  
            </div>
            <div className="fields">
                {secIdx == 0 && <General info={value.generalInfo} updateInfo={(info) => updateData.setInfo(info)}/>}
                {secIdx == 1 && <Education info={value.education} updateInfo={(info) => updateData.setEdu(info)}/>}
                {secIdx == 2 && <Skills info={value.skills} updateInfo={(info) => updateData.setSkills(info)}/>}
                {secIdx == 3 && <WorkExp info={value.experience} updateInfo={(info) => updateData.setExp(info)}/>}
                {secIdx == 4 && <DownloadCv name={value.generalInfo.name}/>}
            </div>
            
        </div>
    );
}

export default Sections;