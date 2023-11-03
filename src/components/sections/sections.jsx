import General from "./genInfo";
import Education from "./education";
import WorkExp from "./workExp";

function Sections({value, updateData}){
    return (
    <>
        <General info={value.generalInfo} updateInfo={(info) => updateData.setInfo(info)}/>
        <Education info={value.education} updateInfo={(info) => updateData.setEdu(info)}/>
        <WorkExp info={value.experience} updateInfo={(info) => updateData.setExp(info)}/>
    </>
    );
}

export default Sections;