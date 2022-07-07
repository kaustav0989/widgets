import React,{ useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Dropdown";

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
const App = () => {
    const [selected,setSelected] = useState(options[0]);
    return (
        <div>
            <br></br>
            {/* <Accordion items = {items} /> */}
            {/* <Search /> */}
            <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    );
}

export default App;