import { useState } from 'react';
import MOCkUP_DATA from './mockup_data.js';
import Sections from './components/sections/sections.jsx';
import Preview from './components/preview/preview.jsx';

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
    <Sections value={data} updateData={update} className="sections"/>
    <Preview info={data}/>
  </>
  );
}

export default App
