import {FC} from "react";
import { StyledSearchBlock } from './style'

export const SearchBlock:FC = ():JSX.Element => {

    return(
        <StyledSearchBlock encType="multipart/form-data" method='post'>
            <input type='text' placeholder='Что вы ищите...?' name='search'/>
        </StyledSearchBlock>
    )
}