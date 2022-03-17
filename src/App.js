import { useState } from 'react';

import User from './User';
function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('a');
  function changeName() {
    setShow(!show);
    setName('app');
  }

  return (
    <div className="App">
      {
        show ? <User name={name} /> : null
      }
        <button onClick={changeName}>Change!</button>
    </div>
  );
}

export default App;
