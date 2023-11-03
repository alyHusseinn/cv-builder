function Education({info, updateInfo}){
    return(
    <>
        {
            info.map((val, idx)=>{
                return <Educell cellVal={val} key={idx} update={
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

function Educell({cellVal, update}){
    return (
    <>
        <input type="text" name="school" value={cellVal.school} maxLength={40} onChange={
            (e) => { update({...cellVal, school: e.target.value})}
        }/>
        <input type="text" name="degree" value={cellVal.degree} maxLength={20} onChange={
            (e) => { update({...cellVal, degree: e.target.value})}
        }/>
        <input type="date" name="from" value={cellVal.from} onChange={
            (e) => { update({...cellVal, from: e.target.value})}
        }/>
        <input type="date" name="to" value={cellVal.to} onChange={
            (e) => { update({...cellVal, to: e.target.value})}
        }/>
    </>
    )
}

export default Education;