import React, { useState } from 'react'

export default function Textarea(props) {
  const [text, setText] = useState("");
  const uppercasefunc = () => {
    // console.log("uppercase clicked");
    let newtext = text.toUpperCase();

    setText(newtext);
    props.showAlert("you successfully convert text to uppercase", "primary");

  }
  const lowercasefunc = () => {
    // console.log("uppercase clicked");
    let newtext = text.toLowerCase();

    setText(newtext);
    props.showAlert("you successfully convert text to lower case", "primary");
  }
  const clearfunc = () => {
    // console.log("uppercase clicked");

    let check = window.confirm("are you sure to clear text");
    // console.log(check);

    let newtext = "";
    if (check === true) {
      setText(newtext);
      props.showAlert("you successfully clear all text", "primary");
    }

  }
  const titlecasefunc = () => {
    // console.log("uppercase clicked");
    let b = text.split(' ');
    // let newtext="";
    for (let i = 0; i < b.length; i++) {
      let st = b[i];
      let firstchar = st.charAt(0).toUpperCase();
      let remain_str = st.slice(1).toLowerCase();
      b[i] = firstchar + remain_str;
    }

    // console.log(b);
    let newtext = b.join(" ");

    setText(newtext);
    props.showAlert("you successfully convert text to title case", "primary");
  }


  const changetext = (event) => {
    // console.log("you try to change");
    setText(event.target.value);

  }
  const removeextrafunc = (event) => {
    // console.log("you try to change");
    // setText(event.target.value);

    let newtext = text.replace(/\s+/g, " ");
    setText(newtext);
    props.showAlert("you successfully remove extra spaces", "primary");

  }

  return (
    <>


      {/* <span className="input-group-text" id="inputGroup-sizing-sm">Small</span> */}
      <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <div className="container" >
          <h1>Enter Your Text</h1>

          <div className="input-group input-group-sm mb-3" >

            <textarea placeholder="Please write your notes here" className={`   text-${props.mode === 'dark' ? 'light' : 'dark'}   bg-${props.mode === 'dark' ? 'dark' : 'light'}`} style={{ height: "217px", width:"100%" }} row="12" value={text} onChange={changetext} />

          </div>
          <button disabled={text.length===0} className="btn btn-primary my-2 " onClick={uppercasefunc}>UPPER CASE</button>
          <button disabled={text.length===0} className={`btn btn-primary mx-2  my-2 `} onClick={lowercasefunc}>Lower CASE</button>
          <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2 " onClick={clearfunc} >clear text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={titlecasefunc}>Title case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={removeextrafunc}>Remove extra spaces</button>

        </div>
        <div className="container my-3">
          <h1>your text summary</h1>
          <p> your words:</p><input type="text" value={text.split(" ").filter((element) => { return element.length != 0 }).length} style={{ backgroundColor: "#d8d8d8" }} ></input>
          <p style={{ marginTop: "10px" }}  > CHARACTER YOU ENTERED:</p><input type="text" value={text.length} style={{ backgroundColor: "#d8d8d8" }} ></input>
          <p> Time To read :</p><input type="text" value={0.08 * (text.split("").filter((element) => { return element != " " }).length) + " sec"} style={{ backgroundColor: "#d8d8d8" }} ></input>

          <h3 className='my-3'> PREVIEW  Area</h3>
          <p style={{textAlign:'justify'}}><b><i >{text.length>0?text:"Nothing To Preview"}</i></b></p>
        </div>
      </div>



    </>

  )
}
