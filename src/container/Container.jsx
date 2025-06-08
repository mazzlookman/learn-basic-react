export default function Container({ children }) {
    return (
        <div>
            <h1>Programmer Zaman Now</h1>
            
                {children}
            
            <footer>
                <p>© 2023 Programmer Zaman Now</p>
            </footer>
        </div>
    )
}