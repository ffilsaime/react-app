import {useState} from "react";

function Tab({id}){
    if (id == 1){
        return (<p>
            The HyperText Markup Language or HTML is the
            standard markup language for documents designed to
            be displayed in a web browser.
        </p>);
    } else if (id == 2){
        return (<p>
            Cascading Style Sheets is a style sheet language
            used for describing the presentation of a document
            written in a markup language such as HTML or XML.
        </p>);
    } else if (id == 3) {
        return (
            <p>
                JavaScript, often abbreviated as JS, is a
                programming language that is one of the core
                technologies of the World Wide Web, alongside HTML
                and CSS.
            </p>
        );
    } else {
        return null;
    }
}

function setTextToBlue(id){
    const button = document.getElementById(id);
    button.style.color = 'blue';
}

export default function Tabs() {
    const [id, setId] = useState(0);

    // html will have an id of 1
    // css will have an id of 2
    // JavaScript will have an id of 3
    return (
        <div>
            <div>
                <button id="htmlButton" onClick={() => {setId(1)}}>HTML</button>
                <button id="cssButton" onClick={() => {setId(2)}}>CSS</button>
                <button id="jsButton" onClick={() => {setId(3)}}>JavaScript</button>
            </div>
            <div>
                <Tab id={id}/>
            </div>
        </div>
    );
}
