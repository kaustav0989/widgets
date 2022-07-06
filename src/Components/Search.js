import React,{useEffect, useState} from "react";
import axios from "axios";

const Search = () => {

    //State to recognize the search term
    const [term,setTerm] = useState('programming');
    //State to recognize the search results
    const [results,setResults] = useState([]);
    console.log(results);

    const renderedResults = results.map( (result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    className="ui button">
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html : result.snippet }}></span>
                </div>
            </div>
        );
    });

    useEffect(() => {
        //Async function definition
        const search =  async () => {
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
        };

        //checking whether it's the first render or not
        if( term && !results.length ){
            search();
        }else{
            const timerId = setTimeout( () => {
                if(term) 
                search();
            },1000);
    
            //using useEffect() cleanup function to clear the last timer.....
            //useEffect() first argument function can only return a function
            return () => {
                clearTimeout(timerId);
            }
        }
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
            <div className="ui celled list">{renderedResults}</div>
        </React.Fragment>
    );
}

export default Search;