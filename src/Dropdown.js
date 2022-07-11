import React,{useState,useEffect,useRef} from "react";

const Dropdown = ( {options,selected,onSelectedChange,label} ) => {
    //state for storing the dropdown is clicked or not as true,false
    const [open,setOpen] = useState(false);
    //using ref to check the current DOM element
    const ref = useRef();

    //Adding manual event listener to the body via useEffect() to use on initial render only
    const onBodyClick = (event) => {
        //checking that the current ref is containing the dropdown component
        //if contains do nothing let the dropdown component logic work
        if( ref.current.contains(event.target) ){
            return;
        }
        setOpen(false);
    };

    useEffect( () => {
        document.body.addEventListener('click',onBodyClick ,{capture:true});

        //cleanup function for remove bodyclick event in time of dropdown not showing
        return () => {
            document.body.removeEventListener('click',onBodyClick ,{capture:true});
        }
            
    },[]);

    //This code snippet used to show the each div for render
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
        <React.Fragment>
        <div ref={ref}  className="ui form">
            <div className="field">
                <label className="label">{label}</label>
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
        <p style={{color:`${selected.value}`}}>{selected.label}</p>
        </React.Fragment>
    );
}

export default Dropdown;