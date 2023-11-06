function Skills({ info, updateInfo }) {
  return (
    <>
      <label>Skills</label>
      {info.map((skill, idx) => {
        return (
          <div className="skill-input" key={idx}>
            <span
              className="del-skill"
              key={idx}
              onClick={() => {
                info.splice(idx, 1);
                updateInfo(info);
              }}
            >
              X
            </span>
            <input
              type="text"
              name="skill"
              value={skill}
              key={idx}
              maxLength={30}
              onChange={(e) => {
                info[idx] = e.target.value;
                updateInfo(info);
              }}
            />
          </div>
        );
      })}
      <button className="add-skill" onClick={() => updateInfo([...info, ""])}>
        Add skill
      </button>
    </>
  );
}

export default Skills;
