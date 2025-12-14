import { useState } from "react";

function ListGroup(){
    // Something to note about react: it can't return more than one element like having this class
    // return both a ul and a h1
    // you can avoid that by using a div
    // but a better way of doing it is using a fragment
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    // this is a hook
   // arr[0] // contains the variable value itself (selected Index)
    //arr[1] // updater function
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        // return items.length === 0 ? <p>No item found</p> : null;
        return items.length === 0 && <p>No item found</p>;
    }

    return (
        <>
            <h1>List</h1>
            { getMessage() }
            <ul className="list-group">
                { items.map((item, index) =>
                    <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={ () => {setSelectedIndex(index)}}>
                        {item}
                    </li>
                    )
                }
            </ul>
        </>
    );
}

export default ListGroup;