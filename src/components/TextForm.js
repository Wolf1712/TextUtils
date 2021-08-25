import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        let newtext=text.toUpperCase();
        SetText(newtext);  
        // console.log("up click was pressed");
        props.showAlert("Converted to uppercase!", "success");

    }
    const handleOnChange=(event)=>{
        // console.log("on change was pressed");
      SetText(event.target.value);
    }
    const handledownckick=()=>{
        let text1=text.toLowerCase();
        SetText(text1);
        props.showAlert("Converted to lowercase!", "success");

        // console.log("Down click was pressed");
    }
    const handlespaceclick=()=>{
        let text2=text.split(/[ ]+/);
        SetText(text2.join(" "));
        props.showAlert("Extra Spaces are removed!", "success");

    }
    const oncopy=()=>{
      console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const onclear=()=>{
      let newText = '';
      SetText(newText);
      props.showAlert("Text Was Cleared!", "success");

    }
    const [text, SetText] = useState('');
    // text="new rexr";//wrong way of entering
    // SetText("new text");//corect way
    return (
      <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handledownckick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handlespaceclick}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={oncopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={onclear}>Clear text</button>
      {/* <button className="btn btn-primary">Convert to UpperCase</button> */}
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>This Is your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes Taken To Read</p>   
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something To Preview Here"}</p>     
      </div>
      </>
    )
}
