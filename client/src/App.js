import Popup from './components/Popup';
import { useState, useEffect } from 'react';

function App() {
  //declaring a new state variable. hooks
  const [button3Popup, setButton3Popup] = useState(false);
  const [button2Popup, setButton2Popup] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

 

  useEffect(() =>{ 
    setTimeout(() => {
      setTimedPopup(true);
    }, 4000);
  }, []);


 function firstClick(){
    setTimedPopup(false);
    setButtonPopup(true);
 }

 function secondClick(){
  setButtonPopup(false);
  setButton2Popup(true);
}

function thirdClick(){
  setButton2Popup(false);
  setButton3Popup(true);
}

  



  return (
    <div className="App">
        <main>
            <h1>React Popups</h1>
            <br/><br/>
            <button onClick={thirdClick}>Open Popups</button>
           
        </main>
        
        <Popup trigger={button3Popup} setTrigger={setButton3Popup}>
              <h3>my popup</h3>
              <p>this is the 4th popup</p>
            
        </Popup>
        
        
        <Popup trigger={button2Popup} setTrigger={setButton2Popup}>
              <h3>my popup</h3>
              <p>this is the 3rd popup</p>
              <button onClick={thirdClick}>Open Popups</button>
            
        </Popup>
              
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>my popup</h3>
              <p>this is the 2nd popup triggered popup</p>
              <button onClick={secondClick}>Open Popups</button>
        </Popup>

        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
              <h3>my popup</h3>
              <p>this is my first popup</p>
              <button onClick={firstClick}>Open Popups</button>
        </Popup>
       
    </div>
  );
}

export default App;