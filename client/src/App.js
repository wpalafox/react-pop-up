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
  //e.preventDefault();
  console.log(e);
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
    console.log(error);
    return;
  });

  setForm({ question_one: "", question_two: "", question_three: "", question_four: "",});
  
}
  
  
  
  //declaring a new state variable. hooks
  const [button3Popup, setButton3Popup] = useState(false);
  const [button2Popup, setButton2Popup] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  const [thankyouPopup, setThankYouPopup] = useState(false);

 
 

  useEffect(() =>{ 
    setTimeout(() => {
      setTimedPopup(true);
    }, 4000);
  }, []);


 function firstClickyes(){
    setTimedPopup(false);
    updateForm({question_one: "yes"});
    setButtonPopup(true);
 }

 function firstClickno(){
  setTimedPopup(false);
  updateForm({question_one: "no"});
  console.log(form)
  setButtonPopup(true);
}

 function secondClickyes(){
  setButtonPopup(false);
  updateForm({question_two: "yes"});
  setButton2Popup(true);
}

function secondClickno(){
  setButtonPopup(false);
  updateForm({question_two: "no"});
  console.log(form)
  setButton2Popup(true);
}

function thirdClickyes(){
  setButton2Popup(false);
  updateForm({question_three: "yes"});
  setButton3Popup(true);
}

function thirdClickno(){
  setButton2Popup(false);
  updateForm({question_three: "no"});
  console.log(form)
  setButton3Popup(true);
}

function fourthClickyes(){
 
  setButton3Popup(false);
  updateForm({question_four: "yes"});
  setThankYouPopup(true);
  console.log(form)
  //onSubmit(form);

  
  
  
  
}

function fourthClickno(){
  
  setButton3Popup(false);
  updateForm({question_four: "no"});
  setThankYouPopup(true);
  //console.log(form)
 
  
}


function userSubmit(){
  console.log(form);
  onSubmit(form);
  setThankYouPopup(false);

}


  



  return (
    <div className="App">
        <main>
            <h1>Pop Application</h1>
            <br/><br/>
           
           
        </main>
        
        <Popup trigger={thankyouPopup} setTrigger={setThankYouPopup}>
              
              <p>Thank you!</p>
              <button onClick={userSubmit}>Close</button> 
            
        </Popup>
        
        
        
        
        
        
        <Popup trigger={button3Popup} setTrigger={setButton3Popup}>
              
              <p>Allow this device to access your browser history?</p>
              <button onClick={fourthClickyes}>Yes</button> <button onClick={fourthClickno}>No</button>
            
        </Popup>
        
        
        
        <Popup trigger={button3Popup} setTrigger={setButton3Popup}>
              
              <p>Allow this website to access your location?</p>
              <button onClick={fourthClickyes}>Yes</button> <button onClick={fourthClickno}>No</button>
            
        </Popup>
        
        
        <Popup trigger={button2Popup} setTrigger={setButton2Popup}>
            
              <p>Allow this website to access your device's camera and microphone?</p>
              <button onClick={thirdClickyes}>Yes</button> <button onClick={thirdClickno}>No</button>
            
        </Popup>
              
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
           
              <p>Allow this website to access your photos, media and files on your device?</p>
              <button onClick={secondClickyes}>Yes</button><button onClick={secondClickno}>No</button>
        </Popup>

        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            
              <p>Allow this website to access your browser's cookies?</p>
              <button onClick={firstClickyes}>Yes</button> <button onClick={firstClickno}>No</button>
        </Popup>
       
    </div>
  );
}

export default App;
