// PascalCasing = each word is capitalized unlike camelcase where the first word has a lowercase letter
function Message() {
    // the code I have below is JSX: JavaScript XML
    const name = 'Flo';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;