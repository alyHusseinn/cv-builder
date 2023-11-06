function GenInfo({ value, addBorder }) {
  return (
    <>
      <div className={`${addBorder ? "add-border" : ""} cv-geninfo`}>
        <h1 className="name">{value.name}</h1>
        <div className="contacts">
          <div className="email">{value.email}</div>
          <div className="phone">{value.phone}</div>
          <a href={value.linkedin}>LinkedIn</a>
        </div>
      </div>
      <div className={`${addBorder ? "add-border" : ""} about`}>
        <h1 className="about-header sec-head">About</h1>
        <div className="summary">{value.summary}</div>
      </div>
    </>
  );
}

export default GenInfo;
