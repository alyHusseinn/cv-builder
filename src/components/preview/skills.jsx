function Skills({value}){
    return (
    <div className="cv-skills">
        <h1 className="skills-header sec-head">Skills</h1>
        <div className="skills">
        {
            value.map((skill,idx) => {
                return <div className="skill" key={idx}>{skill}</div>
            })
        }
        </div>
    </div>
    )
}

export default Skills;