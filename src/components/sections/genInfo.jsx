import Input from "./Input";

function General({ info, updateInfo }) {
  return (
    <>
      <Input
        type="text"
        name="name"
        value={info.name}
        maxLength={30}
        onChange={(e) => updateInfo({ ...info, name: e.target.value })}
      />
      <Input
        type="email"
        name="email"
        value={info.email}
        maxLength={50}
        onChange={(e) => updateInfo({ ...info, email: e.target.value })}
      />
      <Input
        type="number"
        name="phone"
        value={info.phone}
        maxLength={20}
        onChange={(e) => updateInfo({ ...info, phone: e.target.value })}
      />
      <Input
        type="url"
        name="linkedin"
        value={info.linkedin}
        maxLength={50}
        onChange={(e) => updateInfo({ ...info, linkedin: e.target.value })}
      />
      <Input
        type="url"
        name="website"
        value={info.website}
        maxLength={50}
        onChange={(e) => updateInfo({ ...info, website: e.target.value })}
      />
      <div className="input-field">
        <label htmlFor="summary">About</label>
        <textarea
          name="summary"
          id="summary"
          cols="20"
          rows="5"
          value={info.summary}
          onChange={(e) => updateInfo({ ...info, summary: e.target.value })}
        >
          Summary
        </textarea>
      </div>
    </>
  );
}

export default General;
