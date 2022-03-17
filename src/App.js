import { useState } from 'react';

import Profile from './Profile';
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
        <Profile />
    </div>
  );
}

export default App;
