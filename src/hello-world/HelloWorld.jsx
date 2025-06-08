export default function HelloWorld() {
    const props = {
        text : "Hello, World! Props",
    }

    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <BodyHelloWorld />
        </div>
    )
}

function HeaderHelloWorld(props) {
    const { text = 'Ups, lupa kasih text' } = props;
    return (
        <h1 style={{color: 'salmon'}}>{text.toUpperCase()}</h1>
    )
}

function BodyHelloWorld() {
    const text = 'Mari Belajar React Demi Masa Depan yang Mbuh';
    const style = {
        color: 'blue',
        fontSize: '20px',
        fontWeight: 'bold',
    };
    return (
        <p style={style}>{text.toLowerCase()}</p>
    )
}