interface AlertProps {
    text: string;
}

function Alert({text} : AlertProps){
    return (
        <div className="alert alert-primary">{ text }</div>
    )
}

export default Alert;