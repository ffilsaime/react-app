import "../styles/ticktackstyles.css"

//value is a string
export default function Square({value}) {
    function handleClick() {
        console.log('clicked!');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}