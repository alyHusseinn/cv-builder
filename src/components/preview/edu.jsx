function Edu({value}){
    return (
        
        <div className="preview-edu">
            <h1 className="edu-header sec-head">Education</h1>
            {
                value.map((study, idx)=> {
                    return <School value={study} key={idx}/>;
                })
            }
        </div>
    )
}

function School({value}){
    return (
        <div className="school">
            <h2 className="school-name">{value.school}</h2>
            <h3 className="degree">{value.degree}</h3>
            <div className="date">
                <h3 className="from">From: {value.from}</h3>
                <h3 className="to">To: {value.to}</h3>
            </div>
        </div>
    )
}

export default Edu;