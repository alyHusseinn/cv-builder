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
            <h3 className="job-title">Works As: {value.jopTitle}</h3>
            <h3 className="company">In: {value.company}</h3>
            <h3 className="job-location">AT: {value.location}</h3>
        </div>
    )
}

export default Exp;