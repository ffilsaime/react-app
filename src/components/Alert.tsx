interface AlertProps {
    children: string;
}

function Alert({children} : AlertProps){
    return (
        <div className="alert alert-primary">{ children }</div>
    )
}

export default Alert;