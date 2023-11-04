import GenInfo from "./genInfo";
import Edu from "./edu";
import Exp from "./exp";

function Preview({info}){
    return (
        <div className="preview">
            <GenInfo value={info.generalInfo}/>
            <Edu value={info.education}/>
            <Exp value={info.experience}/>
        </div>
    );
}

export default Preview;