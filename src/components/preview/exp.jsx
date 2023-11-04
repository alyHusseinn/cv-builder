function Exp({value}){
    return (
        
        <div className="preview-exp">
            <h1 className="exp-header sec-head">Experience</h1>
            {
                value.map((job, idx)=> {
                    return <Job value={job} key={idx}/>;
                })
            }
        </div>
    )
}

function Job({value}){
    return (
        <div className="job">
            <h2 className="company">{value.company}</h2>
            <h2 className="job-title">{value.jopTitle}</h2>
            <h3 className="job-location">{value.location}</h3>
        </div>
    )
}

export default Exp;