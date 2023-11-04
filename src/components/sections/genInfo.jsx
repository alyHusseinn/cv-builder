function General({info, updateInfo}){

    return (
    <>
        <input type="text" name="name" value = {info.name} maxLength={30} onChange={
            (e) => updateInfo({...info, name: e.target.value})
        }/>
        <input type="email" name="email" value={info.email} maxLength={50} onChange={
            (e) => updateInfo({...info, email: e.target.value})
        }/>
        <input type="number" name="phone" value={info.phone} maxLength={20} onChange={
            (e) => updateInfo({...info, phone: e.target.value})
        }/>
        <input type="url" name="linkedin" value={info.linkedin} maxLength={50} onChange={
            (e) => updateInfo({...info, linkedin: e.target.value})
        }/>
        <input type="url" name="website" value={info.website} maxLength={50}onChange={
            (e) => updateInfo({...info, website: e.target.value})
        } />
        <textarea name="summary" cols="30" rows="5" value={info.summary} onChange={
            (e) => updateInfo({...info, summary: e.target.value})
        }>Summary</textarea>
    </>
    );
}

export default General;