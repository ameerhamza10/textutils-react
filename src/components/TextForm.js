import React,{useState} from 'react'

export default function TextForm(props) {
    const upperCasefunc=()=>{
        console.log("btn is clicked"+text)
        const newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Success","Converted to UPPERCASE")
    }
    const lowerCasefunc=()=>{
        console.log("btn is clicked"+text)
        const newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Success","Converted to lowercase")
    }
    const clearText=()=>{
        console.log("btn is clicked"+text)
        const newText=" ";
        setText(newText)
        props.showAlert("Success","The text has been cleared")
    }
    const capitalizeCase=()=>{
        console.log("btn is clicked"+text)
        const newText=text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
        props.showAlert("Success","converted to Capitalize")
    }
    const change=(e)=>{
        console.log("on chnage")
        setText(e.target.value)
    }
  
    const [text,setText] = useState("")
  return (
    <div>
      <div className={`mb-3 text-${props.mode==="light"? "dark":"light"}`}>
      <h1 className="capitalize">Enter the text to analyze</h1>
  <div className="container">
  
    <textarea placeholder='Enter text here' className={`form-control bg-${props.mode==="light"? "light":"dark"} text-${props.mode==="light"? "dark":"light"}`} value={text} id="myBox" onChange={change} rows="6"></textarea>
    <button className="btn btn-primary my-3" onClick={upperCasefunc}>convert to uppercase</button>
    <button className="btn btn-primary mx-1 my-3" onClick={lowerCasefunc}>convert to lowercase</button>
    <button className="btn btn-primary mx-1 my-3" onClick={clearText}>Clear text</button>
    <button className="btn btn-primary mx-1 my-3" onClick={capitalizeCase}>Capitalize</button>
  </div>
  <div className="container">
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
  </div>
  <div className="container">
    <p>{ 0.008*text.split(" ").length} minutes to read </p>
    <h1>preview</h1>
    <p>{text.length>0 ? text:"enter something in the above box to preview it here"}</p>
  </div>
</div>
    </div>
  )
}

