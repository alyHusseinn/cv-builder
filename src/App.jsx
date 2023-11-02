import { useState } from 'react';
import InitalData from './data.js';
import Sections from './sections/Sections.jsx';
import Preview from './preview/Preview.jsx';

function App() {
  const [data,setData] = useState(InitalData);

  function update(){
    const info = (newInfo) => {
        setData({...data, info});
    };
    const edu = (newEdu) => {
        setData({...data, edu});
    }
    const workExp = (newWorkExp) => {
        setData({...data, workExp});
    }
    return {
        setInfo: info,
        setEdu: edu,
        setWrokExp: workExp
    }
  }

  return (
    <>
        <Sections updateData={() => update()}/>
        <Preview value={data}/>
    </>
  );
}

export default App
