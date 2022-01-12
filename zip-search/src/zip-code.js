import React, {useState} from "react";
function ZipCode (props)
 {
    const {zip, setZip, list, setList} = props
    return(<><h2>{zip}<button onclick="myFunction()">Click me</button></h2></>)
    
}
export default ZipCode;