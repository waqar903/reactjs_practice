import { useState } from 'react';

import User from './User';
function App() {
  const [name, setName] = useState('');
  const [terms, setTerms] = useState(false);
  const [intrest, setIntrest] = useState('');
  function getFormData(e) {
    console.log(name,terms,intrest);
    e.preventDefault();
    
  }

  return (
    <div className="App">
        <form onSubmit={getFormData}>
            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} /><br /><br />
            <select onChange={(e)=>setIntrest(e.target.value)}>
              <option>Select</option>
              <option>Marvel</option>
              <option>new</option>
            </select>
            <br /><br />
            <input type="checkbox" onChange={(e)=>setTerms(e.target.checked)} /> Terms
            <br /><br />
            <button type="submit">Submit</button>
            <button>Clear</button>
        </form>
    </div>
  );
}

export default App;
