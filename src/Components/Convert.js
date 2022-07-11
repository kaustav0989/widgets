import React,{useState,useEffect} from "react";

const Convert = ( {language,text} ) => {
    useEffect( () => {
        console.log('Rerendered');
    },[language,text]);
}

export default Convert;