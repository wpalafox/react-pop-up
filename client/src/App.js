import Popup from './components/Popup';
import { useState, useEffect } from 'react';
import beach from './pics/beach.jpeg';
import './App.css';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from 'react-phone-number-input'

function App() {
  
  const [numValue, setNumValue] = useState();
  //For the counter
  const [count, setCount] = useState(0);
  //For the random array
  const [myArray, setArray] = useState([]);

  
  //declaring a new state variable. hooks
  const [button4Popup, setButton4Popup] = useState(false);
  const [button3Popup, setButton3Popup] = useState(false);
  const [button2Popup, setButton2Popup] = useState(false);
  const [button1Popup, setButton1Popup] = useState(false);
  const [button0Popup, setButton0Popup] = useState(false);
 

  const [timedPopup, setTimedPopup] = useState(false);
  const [thankyouPopup, setThankYouPopup] = useState(false);
  const [CompletePopup, setCompletePopup] = useState(false);

 
 

  useEffect(() =>{ 
          // This will handle array random
      const randomizeArray = ()=> {
        
        var state_array = [setButton0Popup, setButton1Popup, setButton2Popup, setButton3Popup, setButton4Popup]
        
        let currentIndex = state_array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element for yes.
          [state_array[currentIndex], state_array[randomIndex]] = [
            state_array[randomIndex], state_array[currentIndex]];

            
        }
        setArray(...myArray, state_array);
        
        
      }



    setTimeout(() => {
      setTimedPopup(true);
      randomizeArray();
    }, 1000);
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

// Create handleIncrement event handler
const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
};



// This function will handle the submission.
async function onSubmit(e) {
  //e.preventDefault();
  console.log(e);
  // When a post request is sent to the create url, we'll add a new record to the database.
  const newEntry = { ...form };
  

  await fetch("https://node-server-cyberh.herokuapp.com/record/add", {
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


  
 















    



 
 
  function firstPhone(){
    if(isPossiblePhoneNumber(numValue)){ 
        setTimedPopup(false);
        updateForm({identity_number: numValue});
        
        console.log(myArray);
        myArray[count](true);
        console.log(count);
        handleIncrement();
      
        //setButton0Popup(true);
    
        

        

              
        
       
      
    }else{
      alert("Not a valid phone number!")
    }
 }

 function firstClickyes(){
  
  setButton0Popup(false);
  updateForm({question_one: "1"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
  
  
  
  
  
}

function firstClickno(){
 
  setButton0Popup(false);
  updateForm({question_one: "0"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
}

 function secondClickyes(){
  setButton1Popup(false);
  updateForm({question_two: "1"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
}

function secondClickno(){
  setButton1Popup(false);
  updateForm({question_two: "0"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
}

function thirdClickyes(){
  setButton2Popup(false);
  updateForm({question_three: "1"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
  
}

function thirdClickno(){
  setButton2Popup(false);
  updateForm({question_three: "0"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
  
}

function fourthClickyes(){
  setButton3Popup(false);
  
  updateForm({question_four: "1"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }


 
}

function fourthClickno(){
  setButton3Popup(false);
 
  updateForm({question_four: "0"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
 
  
}


function fifthClickyes(){
  
  setButton4Popup(false);
  updateForm({question_five: "1"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
 


 
}

function fifthClickno(){
  
  setButton4Popup(false);
  updateForm({question_five: "0"});
  if(count >= 5){
    setThankYouPopup(true);
  }else{
    myArray[count](true);
    console.log(count);
    handleIncrement();


  }
  
 
  
}


function userSubmit(){
  console.log(form);
  onSubmit(form);
  setThankYouPopup(false);
  setCompletePopup(true);

}

function completeClose(){
  
  setCompletePopup(false);

}

 



  return (
    <div className="App">
        <main>
            
            <img src={beach} className="App-logo pulse" alt="logo" />
            <br/><br/>
           
           
        </main>
        
        <Popup trigger={CompletePopup} setTrigger={setCompletePopup}>
              
              <p>Thank you!</p>

              <button onClick={completeClose}>Close</button> 
              
            
        </Popup>
        
        
        
        
        
        
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
