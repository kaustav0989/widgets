import React,{useState} from "react";

const Dropdown = ( {options,selected,onSelectedChange} ) => {
    //state for storing the dropdown is clicked or not as true,false
    const [open,setOpen] = useState(false);
    const renderedOptions = options.map( (option) => {

        //If the current value is showing, don't show that on dropdown
        if( option.value === selected.value ){
            return null;
        }
        return (
            <div key={option.value} 
            className="item"
            onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;