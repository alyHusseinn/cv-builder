import GenInfo from "./genInfo";
import Edu from "./edu";
import Exp from "./exp";
import Skills from "./skills";

function Preview({info}){
    return (
        <div className="preview">
            <GenInfo value={info.generalInfo}/>
            <Edu value={info.education}/>
            <Skills value={info.skills}/>
            <Exp value={info.experience}/>
        </div>
    );
}

export default Preview;