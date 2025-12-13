function ListGroup(){
    // Something to note about react: it can't return more than one element like having this class
    // return both a ul and a h1
    // you can avoid that by using a div
    return (
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    );
}

export default ListGroup;