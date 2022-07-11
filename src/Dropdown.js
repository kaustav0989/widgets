import React,{useState,useEffect,useRef} from "react";

const Dropdown = ( {options,selected,onSelectedChange} ) => {
    //state for storing the dropdown is clicked or not as true,false
    const [open,setOpen] = useState(false);
    //using ref to check the current DOM element
    const ref = useRef();

    //Adding manual event listener to the body via useEffect() to use on initial render only

    useEffect( () => {
        document.body.addEventListener('click', (event) => {
            //checking that the current ref is containing the dropdown component
            //if contains do nothing let the dropdown component logic work
            if( ref.current.contains(event.target) ){
                return;
            }
            setOpen(false);
        },{capture:true});
    },[]);
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
    //console.log(ref.current);
    return (
        <div ref={ref}  className="ui form">
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