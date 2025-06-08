import './HelloWorld.css';

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
        <h1 className='header'>{text.toUpperCase()}</h1>
    )
}

function BodyHelloWorld() {
    const text = 'Mari Belajar React Demi Masa Depan yang Mbuh';
    return (
        <p className='content'>{text.toLowerCase()}</p>
    )
}