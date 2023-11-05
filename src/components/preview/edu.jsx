function Edu({value}){
    return (
        
        <div className="cv-edu">
            <h1 className="edu-header sec-head">Education</h1>
            <div className="schools">
            {
                value.map((study, idx)=> {
                    return <School value={study} key={idx}/>;
                })
            }
            </div>
        </div>
    )
}

function School({value}){
    return (
        <div className="school">
            <h3 className="degree">Bachelor of: <span>{value.degree}</span></h3>
            <h3 className="school-name">AT: <span>{value.school}</span></h3>
            
            <div className="date">
                <h3 className="from">From: <span>{value.from}</span></h3>
                <h3 className="to">To: <span>{value.to}</span></h3>
            </div>
        </div>
    )
}

export default Edu;