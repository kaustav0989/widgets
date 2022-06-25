import React,{useEffect, useState} from "react";

const Search = () => {

    console.log('I RUN ON EVERY RENDER');
    const [term,setTerm] = useState('');
    useEffect(() => {
        console.log('I RUN ON EVERY RERENDER OF DATA CHANGE');
    },[term]);

    const termChange = (e) => {
        setTerm(e.target.value);
    } 
    return (
        <React.Fragment>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input"
                        value={term} 
                        onChange={termChange} 
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Search;