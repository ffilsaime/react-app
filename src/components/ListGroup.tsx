import type {MouseEvent} from "react";

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

    const getMessage = () => {
        // return items.length === 0 ? <p>No item found</p> : null;
        return items.length === 0 && <p>No item found</p>;
    }

    // const clickFunction = (value: string) => {
    //     console.log(value);
    // }

    // event handler
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>
            { getMessage() }
            <ul className="list-group">
                { items.map((item) =>
                    <li className="list-group-item"
                        key={item}
                        onClick={handleClick}>
                        {item}
                    </li>
                    )
                }
            </ul>
        </>
    );
}

export default ListGroup;