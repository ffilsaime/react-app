import ListGroup from './components/ListGroup';

function App(){
    //NOTE: You should always close your react component or you'll get a compilation error
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    return (
        <div>
            <ListGroup items={items} heading='Cities'/>
        </div>
    );
}

export default App;