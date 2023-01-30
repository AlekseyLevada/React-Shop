import { StyledSearchBlock } from './style'

export function SearchBlock() : JSX.Element {
    return(
        <StyledSearchBlock encType="multipart/form-data" method='post'>
            <input type='text' defaultValue='Что вы ищите...?' name='search'/>
        </StyledSearchBlock>
    )
}