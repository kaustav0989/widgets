import React from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

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
const App = () => {
    return (
        <div>
            <br></br>
            {/* <Accordion items = {items} /> */}
            <Search />
        </div>
    );
}

export default App;