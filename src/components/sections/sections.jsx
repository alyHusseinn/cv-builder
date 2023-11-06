import { useState } from "react";
import General from "./genInfo";
import Education from "./education";
import WorkExp from "./workExp";
import DownloadCv from "./downloadcv";
import Skills from "./skills";


function Sections({value, updateData, showSec, updateSecIdx}){
    
    
    return (
        <div className="sections">
            <div className="buttons">
                {showSec > 0 && <button onClick={() => updateSecIdx(showSec - 1)}>Back</button>} 
                {showSec < 4 && <button onClick={() => updateSecIdx(showSec + 1)}>Next</button>}  
            </div>
            <div className="fields">
                {showSec == 0 && <General info={value.generalInfo} updateInfo={(info) => updateData.setInfo(info)}/>}
                {showSec == 1 && <Education info={value.education} updateInfo={(info) => updateData.setEdu(info)}/>}
                {showSec == 2 && <Skills info={value.skills} updateInfo={(info) => updateData.setSkills(info)}/>}
                {showSec == 3 && <WorkExp info={value.experience} updateInfo={(info) => updateData.setExp(info)}/>}
                {showSec == 4 && <DownloadCv name={value.generalInfo.name}/>}
            </div>
            
        </div>
    );
}

export default Sections;