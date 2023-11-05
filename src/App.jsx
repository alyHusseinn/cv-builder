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
    setSkills(newSkill){
        setData({...data, skills: newSkill});
    },
    setExp (nexExp) {
        setData({...data, experience: nexExp});
    },
  }

  return (
  <>
    <div className="app">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="content">
        <Sections value={data} updateData={update} className="sections"/>
        <Preview info={data}/>
      </div>
      <footer>
        <h2>made by <a href="https://github.com/alyHusseinn">AlyHussein</a> | <a href="https://github.com/alyHusseinn/cv-builder">Source</a></h2>
      </footer>
    </div>
    
  </>
  );
}

export default App
