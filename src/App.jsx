import { useState } from 'react';
import MOCkUP_DATA from './mockup_data.js';
import Sections from './components/sections/sections.jsx';
// import Preview from './preview/Preview.jsx';

function App() {
  const [data,setData] = useState(MOCkUP_DATA);

  const update = {
    setInfo (newInfo) {
        setData({...data, generalInfo: newInfo});
    },
    setEdu (newEdu){
        setData({...data, education: newEdu});
    },
    setExp (nexExp) {
        setData({...data, experience: nexExp});
    },
  }

  return (
    
    <>
    {console.log(data)}
        <Sections value={data} updateData={update} className="sections"/>
    </>
  );
}

export default App
