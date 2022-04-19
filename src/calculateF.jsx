import React,{useState} from "react"
function Calculatef(){
    const [fnum,num1State]=useState("")
    const [snum,num2State]=useState("")
    const [sum,totalState]=useState("")
    function add(){
        let sum=parseInt(fnum)+parseInt(snum)
        totalState(sum);
    }
    function subtract(){
        let sum=parseInt(fnum)-parseInt(snum)
        totalState(sum);
        console.log(sum)
    }
    function divide(){
        let sum=parseInt(fnum)/parseInt(snum)
        totalState(sum);
        console.log(sum)
    }
    function multiply(){
        let sum=parseInt(fnum)*parseInt(snum)
        totalState(sum);
        console.log(sum)
    }
    return(
        <>
        <h1>helloo</h1>
        <input type="text" value={fnum} onChange={(e)=>num1State(e.target.value)}/>
        <br/>
        <br/>
        <input type="text" value={snum} onChange={(e)=>num2State(e.target.value)}/>
        <br/>
        <button onClick={() => {add();}}>
            Add
          </button>
          <button onClick={() => {subtract();}}>
            Subtract
          </button>
          <button onClick={() => {multiply();}}>
            Multiply
          </button>
          <button onClick={() => {divide();}}>
            Divide
          </button>
          <br/>
          <input type="text" value={sum}/>
        </>
    )
}
export default Calculatef;