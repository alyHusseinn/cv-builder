import GenInfo from "./genInfo";
import Edu from "./edu";
import Exp from "./exp";
import Skills from "./skills";

function Preview({info,showSecIdx}){
    return (
        <div className="preview">
            <GenInfo addBorder={showSecIdx == 0} value={info.generalInfo}/>
            <Edu addBorder={showSecIdx == 1} value={info.education}/>
            <Skills addBorder={showSecIdx == 2} value={info.skills}/>
            <Exp addBorder={showSecIdx == 3} value={info.experience}/>
        </div>
    );
}

export default Preview;