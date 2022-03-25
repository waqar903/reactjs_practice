import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { incNumber, decNumber} from './actions/index';

function App() {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={() => dispatch(decNumber())}>
          -
        </button>
        <form>
        <input type="number" value={myState}/>
        </form>
        
        <button onClick={() => dispatch(incNumber(2))}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
