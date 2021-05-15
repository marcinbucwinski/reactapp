import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper>
            <input type="text" value={inputText} onChange={inputHandler}/>
            {'Home'.toLowerCase().includes(inputText.toLowerCase()) && 
                <div>Home</div>
            }
            {'Publication'.toLowerCase().includes(inputText.toLowerCase()) && 
                <div>Publication</div>
            }

        </Wrapper>
    );
};