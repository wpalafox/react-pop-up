import Popup from './components/Popup';
import { useState, useEffect } from 'react';
import beach from './pics/beach.jpeg';
import './App.css';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from 'react-phone-number-input'

function App() {

  const [numValue, setNumValue] = useState()

  
  //declaring a new state variable. hooks
  const [button4Popup, setButton4Popup] = useState(false);
  const [button3Popup, setButton3Popup] = useState(false);
  const [button2Popup, setButton2Popup] = useState(false);
  const [button1Popup, setButton1Popup] = useState(false);
  const [button0Popup, setButton0Popup] = useState(false);
 

  const [timedPopup, setTimedPopup] = useState(false);
  const [thankyouPopup, setThankYouPopup] = useState(false);

 
 

  useEffect(() =>{ 
    setTimeout(() => {
      setTimedPopup(true);
    }, 4000);
  }, []);

  
  
  const [form, setForm] = useState({
    identity_number:"",
    question_one:"",
    question_two:"",
    question_three:"",
    question_four:"",
    question_five:"",
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

  setForm({identity_number: "", question_one: "", question_two: "", question_three: "", question_four: "", question_five: ""});
  
}


  
 



/*
function shuffle_1(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element for yes.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];

      
  }

  return array;
}


const shuffle_array_0 = shuffle_0(function_array);

//The random states

const state_array = [setButton0Popup, setButton1Popup, setButton2Popup, setButton3Popup, setButton4Popup]

const shuffle_array_1 = shuffle_1(state_array);


    // Create handleIncrement event handler
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
      setCount(prevCount => prevCount - 1);
    };


 */
 
 
  function firstPhone(){
    if(isPossiblePhoneNumber(numValue)){ 
        setTimedPopup(false);
        updateForm({identity_number: numValue});
        setButton0Popup(true);
        

              
        
       
      
    }else{
      alert("Not a valid phone number!")
    }
 }

 function firstClickyes(){
  
  setButton0Popup(false);
  updateForm({question_one: "yes"});
  setButton1Popup(true);
  
  
}

function firstClickno(){
 
  setButton0Popup(false);
  updateForm({question_one: "no"});
  setButton1Popup(true);
  
}

 function secondClickyes(){
  setButton1Popup(false);
  updateForm({question_two: "yes"});
  setButton2Popup(true);
  
}

function secondClickno(){
  setButton1Popup(true);
  updateForm({question_two: "no"});
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
  setButton3Popup(true);
  
  
}

function fourthClickyes(){
  setButton3Popup(false);
  
  updateForm({question_four: "yes"});
  setButton4Popup(true);


 
}

function fourthClickno(){
  setButton3Popup(false);
 
  updateForm({question_four: "no"});
  setButton4Popup(true);
  
 
  
}


function fifthClickyes(){
  
  setButton4Popup(false);
  updateForm({question_five: "yes"});
   setThankYouPopup(true);
  
 


 
}

function fifthClickno(){
  
  setButton4Popup(false);
  updateForm({question_five: "no"});
  setThankYouPopup(true);
  
 
  
}


function userSubmit(){
  console.log(form);
  onSubmit(form);
  setThankYouPopup(false);

}


 



  return (
    <div className="App">
        <main>
            
            <img src={beach} className="App-logo pulse" alt="logo" />
            <br/><br/>
           
           
        </main>
        
        <Popup trigger={thankyouPopup} setTrigger={setThankYouPopup}>
              
              <p>Is the background image a beach?</p>
              <button onClick={userSubmit}>Yes</button> 
              <button onClick={userSubmit}>No</button> 
            
        </Popup>
        
        
        
        
        
        
        <Popup trigger={button4Popup} setTrigger={setButton4Popup}>
              
              <p>Allow this device to access your browser history?</p>
              <button onClick={fifthClickyes}>Yes</button> <button onClick={fifthClickno}>No</button>
            
        </Popup>
        
        
        
        <Popup trigger={button3Popup} setTrigger={setButton3Popup}>
              
              <p>Allow this website to access your location?</p>
              <button onClick={fourthClickyes}>Yes</button> <button onClick={fourthClickno}>No</button>
            
        </Popup>
        
        
        <Popup trigger={button2Popup} setTrigger={setButton2Popup}>
            
              <p>Allow this website to access your device's camera and microphone?</p>
              <button onClick={thirdClickyes}>Yes</button> <button onClick={thirdClickno}>No</button>
            
        </Popup>
              
        <Popup trigger={button1Popup} setTrigger={setButton1Popup}>
           
              <p>Allow this website to access your photos, media and files on your device?</p>
              <button onClick={secondClickyes}>Yes</button><button onClick={secondClickno}>No</button>
        </Popup>

        <Popup trigger={button0Popup} setTrigger={setButton0Popup}>
           
           <p>Allow this website to access your cookies?</p>
           <button onClick={firstClickyes}>Yes</button><button onClick={firstClickno}>No</button>
        </Popup>

      

        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            
            <p>Please Enter your full phone number (with country code) </p>
            <PhoneInput
              placeholder="Enter phone number" 
              className="form-control"
              id="id-number"
              value={numValue}
              onChange={setNumValue}
            />
            
            
            <button onClick={firstPhone}>Enter</button> 
      </Popup>
       
    </div>
  );
}

export default App;
