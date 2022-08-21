import React,{ useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Dropdown";
import Translate from "./Components/Translate";

// Dummy Array of Objects
const items = [
    {
        title : "Hello",
        content : "how to greet"
    },
    {
        title : "Bye",
        content : "how to bid adieu"
    },
    {
        title : "echo",
        content : "print in cmd"
    }

];

const options = [
    {
        label : "The color Red",
        value : "red"
    },
    {
        label : "The color Green",
        value : "green"
    },
    {
        label : "The shade of blue",
        value : "blue"
    }

];

const showAccordion = () => {
    if( window.location.pathname === '/' ){
        return <Accordion items = {items} />
    }
}

const showList = () => {
    if( window.location.pathname === '/list' ){
        return <Search />
    }
}

const showDropdown = () => {
    if( window.location.pathname === '/dropdown' ){
        return <Dropdown />
    }
}
const showTranslation = () => {
    if( window.location.pathname === '/translate' ){
        return <Translate /> 
    }
}
const App = () => {
    //const [selected,setSelected] = useState(options[0]);
    //const [showDropdown,setShowDropdown] = useState(true);
    return (
        <div>
            <br></br>
            {/* <Accordion items = {items} /> */}
            {/* <Search /> */}
            {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {
                showDropdown ? 
                <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}/> : null
            }  */}

            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslation()}       
        </div>
    );
}

export default App;