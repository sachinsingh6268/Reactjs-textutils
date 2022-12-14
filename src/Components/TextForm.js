import React, { useState } from 'react'; // here "useState" is a hook which is used to use the features of class without making a class

function TextForm(props) {
    const [text, setText] = useState("")
    // text = "sdkjfa" // wrong way to change state
    // setText("ksdfjakdj") // correct way to change state
    // function changeToUppercase(){
    //     console.log("Uppercase Button Clicked!!😎")
    // }

    const changeToUppercase = () => {
        // console.log("Uppercase button Clicked!!")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase",'success')
    }

    const changeToLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase",'success')
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared",'success')
    }

    const reverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text has been reversed",'success')
    }

    const removeExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert("Extra Spaces has been removed",'success')
    }

    const handleOnChange = (event) => {
        // console.log("On Change function Called")
        setText(event.target.value)
    }

    const myStyle = {
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }

    return (
        <>
            <div className="mb-3 mx-3">
                <h2>{props.heading} </h2>
                <textarea className="form-control" id="text" value={text} style={myStyle} onChange={handleOnChange} rows="9"></textarea>
                <button className="btn btn-primary my-2 mx-2" onClick={changeToUppercase}>Change To Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={changeToLowercase}>Change To Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear Text Field</button>
                <button className="btn btn-primary my-2 mx-2" onClick={reverseText}>Reverse the Text</button>
                <button className="btn btn-primary my-2 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                {/* text.split(" ") will convert the text into array of words by spliting it on the basis of spaces */}
                <p>{text.split(" ").length} words and {text.length} characters are there in this text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter the text above for preview"}</p>
            </div>
        </>
    );
}

export default TextForm