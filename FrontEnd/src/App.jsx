
import { Outlet } from 'react-router-dom'
import './App.css'
import React from 'react'
//import NoteState from './Notes/NoteState';
//import InoteBookImage from "../src/Inotebook.jpg"
//import NoteState from '../../src/NotesContext/Notes/NoteState';
import NoteState from "../src/NoteContext/Notes/NoteState";



function App() {

  //const [myName , setMyname] = useState("Shamshad");
  return (
    <>

<NoteState>

<Outlet></Outlet>
<h4 className='welcome '>Welcome To my NoteBook App</h4>

 {/* <div  
 className='images'> 
 <img width={100} height={100} className= "inotebook"  src={InoteBookImage} alt="" /> </div> */}
 
</NoteState>
    </>
  )
}

export default App;
