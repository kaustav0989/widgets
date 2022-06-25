import React,{useEffect, useState} from "react";
import axios from "axios";

const Search = () => {

    //State to recognize the search term
    const [term,setTerm] = useState('programming');
    //State to recognize the search results
    const [results,setResults] = useState([]);
    console.log(results);

    useEffect(() => {
        //Async function definition and direct call 
        ( async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php',{
                            params : {
                                action :'query',
                                list : 'search',
                                origin : '*',
                                format: 'json',
                                srsearch: term
                            }
            });

            //setting the state
            setResults(response.data.query.search);
        })();
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