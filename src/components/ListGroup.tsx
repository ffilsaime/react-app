function ListGroup(){
    // Something to note about react: it can't return more than one element like having this class
    // return both a ul and a h1
    // you can avoid that by using a div
    // but a better way of doing it is using a fragment
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;