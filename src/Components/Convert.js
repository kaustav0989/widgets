import React,{useState,useEffect} from "react";
import axios from "axios";


const Convert = ( {language,text} ) => {
    const [translated,setTranslated] = useState('');
    useEffect( () => {
        const doTranslation = async () => {
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {} , {
                params : {
                    q : text,
                    target : language.value,
                    key : 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(response.data.data.translations[0].translatedText);
        };
        doTranslation();
        //console.log('Rerendered');
    },[language,text]);

    return <div className="ui header">Output : {translated}</div>
}

export default Convert;