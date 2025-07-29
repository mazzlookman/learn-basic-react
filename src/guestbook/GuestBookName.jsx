export default function guestBookName({inputRef, name, setName}) {
    return (
        <>
            <label htmlFor="name">Name</label><br/>
            <input type="text" name="name" id={"name"} value={name} ref={inputRef} onChange={(e) => setName(e.target.value)} /><br/>
        </>
    )
}