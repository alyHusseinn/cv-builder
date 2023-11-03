function WorkExp({info, updateInfo}){
    return(
    <>
        {
            info.map((val, idx)=>{
                return <Expcell cellVal={val} key={idx} update={
                    (newVal) => {
                        info[idx] = newVal;
                        updateInfo(info)
                    }
                }/>
            })
        }
    </>
    )
}

function Expcell({cellVal, update}){
    return (
    <>
        <input type="text" name="jobtitle" value={cellVal.jopTitle} maxLength={40} onChange={
            (e) => { update({...cellVal, jobTitle: e.target.value})}
        }/>
        <input type="text" name="company" value={cellVal.company}maxLength={20} onChange={
            (e) => { update({...cellVal, company: e.target.value})}
        }/>
        <input type="text" name="Location" value={cellVal.location}onChange={
            (e) => { update({...cellVal, location: e.target.value})}
        }/>
    </>
    )
}

export default WorkExp;