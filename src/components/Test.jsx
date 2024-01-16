import React from 'react';
import './style/style.css'; // Impor modul CSS langsung

// import Style from "./style/style.module.css";

const Test = () => {
    
    const test = "Rumah";

    const obj = {
        key1 : "key1",
        key2 : "key2"
    }

    const style = {
        fontSize : '1em',
        color : 'aqua',
        border : 'none'
    }
    
    
    function pembagian(a,b) {
        return a/b
    }

    return (
        <div>
        <h1 style={{color: 'red'}}>Awards & Certificate</h1>
        <h3 style={style}>test style</h3>
        {/* <h4 className={Style.biru}>module css</h4> */}
        <h4 className="biru">module css</h4>
        <h2>{pembagian(2,3)}</h2>
        <h3>{obj.key1}</h3>
        </div>
    );
}
  
  export default Test;
