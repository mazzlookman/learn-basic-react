export default function SearchForm() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <button onClick={ (e) => {
                e.preventDefault();
                alert('Search button clicked!');
            }}>Search</button>            
        </form>
    )
}