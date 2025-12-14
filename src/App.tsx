import ListGroup from './components/ListGroup';
import Alert from "./components/Alert.tsx";

function App(){
    //NOTE: You should always close your react component or you'll get a compilation error
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    return (
        <div>
            <Alert text="Hello World"/>
            <br/>
            <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
        </div>
    );
}

export default App;