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

    items = [];

    // if (items.length === 0)
    //     return (
    //         <>
    //             <h1>List</h1>
    //             <p>No item found</p>
    //         </>
    //     );

    // const message = items.length === 0 ? <p>No item found</p> : null;

    const getMessage = () => {
        // return items.length === 0 ? <p>No item found</p> : null;
        return items.length === 0 && <p>No item found</p>;
    }

    return (
        <>
            <h1>List</h1>
            { getMessage() }
            <ul className="list-group">
                {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;