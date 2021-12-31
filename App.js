import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HeaderTemplate from './header/header';

import { render } from '@testing-library/react';

function App(){
  
  let [Action, setAction] = useState('');
  let [showMsg, setMessage] = useState(false);

  
    return(
<div className='App'>

<br/>
   <input class="inputD" onChange={e => setAction(e.target.value)}   placeholder="Type a message..."  />   

   
   <button class="btn" onClick={() => setMessage(true)}>
        Click🤖
    </button>
{showMsg && <HeaderTemplate message={Action} /> }
  
</div>
  );
}




    
       
    
export default App;
