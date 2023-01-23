export function SearchBlock() : JSX.Element {
    return(
        <form encType="multipart/form-data" method='post'>
            <input type='text' defaultValue='Поиск' name='search'/>
        </form>
    )
}