import Popup from './components/Popup';
import { useState, useEffect } from 'react';

function App() {
  
  const [form, setForm] = useState({
    question_one:"",
    question_two:"",
    question_three:"",
    question_four:"",
  })

   // These methods will update the state properties.
 function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}

// This function will handle the submission.
async function onSubmit(e) {
  e.preventDefault();
  console.log(e)
  // When a post request is sent to the create url, we'll add a new record to the database.
  const newEntry = { ...form };

  await fetch("http://localhost:5000/record/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ question_one: "", question_two: "", question_three: "", question_four: ""  });
  
}
  
  
  
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


 function firstClickyes(){
    setTimedPopup(false);
    setForm({ question_one: "yes"});
    setButtonPopup(true);
 }

 function firstClickno(){
  setTimedPopup(false);
  setForm({ question_one: "no"});
  setButtonPopup(true);
}

 function secondClickyes(){
  setButtonPopup(false);
  setForm({ question_two: "yes"});
  setButton2Popup(true);
}

function secondClickno(){
  setButtonPopup(false);
  setForm({ question_two: "no"});
  setButton2Popup(true);
}

function thirdClickyes(){
  setButton2Popup(false);
  setForm({ question_three: "yes"});
  setButton3Popup(true);
}

function thirdClickno(){
  setButton2Popup(false);
  setForm({ question_three: "no"});
  setButton3Popup(true);
}

function fourthClickyes(){
  setButton3Popup(false);
  setForm({ question_four: "yes"});
  //onSubmit(form);
  console.log(form)
}

function fourthClickno(){
  setButton3Popup(false);
  setForm({ question_four: "no"});
  onSubmit(form);
}

  



  return (
    <div className="App">
        <main>
            <h1>React Popups</h1>
            <br/><br/>
           
           
        </main>
        
        <Popup trigger={button3Popup} setTrigger={setButton3Popup}>
              
              <p>this is the 4th popup</p>
              <button onClick={fourthClickyes}>Yes</button> <button onClick={fourthClickno}>No</button>
            
        </Popup>
        
        
        <Popup trigger={button2Popup} setTrigger={setButton2Popup}>
            
              <p>this is the 3rd popup</p>
              <button onClick={thirdClickyes}>Yes</button> <button onClick={thirdClickno}>No</button>
            
        </Popup>
              
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
           
              <p>this is the 2nd popup triggered popup</p>
              <button onClick={secondClickyes}>Yes</button><button onClick={secondClickno}>No</button>
        </Popup>

        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            
              <p>this is my first popup</p>
              <button onClick={firstClickyes}>Yes</button>
              <button onClick={firstClickno}>No</button>
        </Popup>
       
    </div>
  );
}

export default App;
