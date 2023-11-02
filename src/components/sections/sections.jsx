import General from "./genInfo";

function Sections({updateData}){
    return (
        <General updateInfo={(info) => updateData().setInfo(info)}/>
    );
}

export default Sections;