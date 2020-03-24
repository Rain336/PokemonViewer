import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

const Wrapper = styled.form`
display: flex;
`;

const Input = styled.input`
flex-basis: 1;
outline: none;
padding: 0.5rem;
border: 2px solid #EF5350;
font: inherit;
background: #FFFFFF;
width: 100%;
`

const Button = styled.button`
color: #FFFFFF;
border: none;
padding: 0.5rem 1rem;
font: inherit;
background: #EF5350;
`;

interface Props {
    placeholder: string;
    onSubmit(value: string): void;
}

export function SearchBar({ placeholder, onSubmit }: React.PropsWithChildren<Props>) {
    const [value, setValue] = useState('');
    return <Wrapper onSubmit={e => {
        e.preventDefault();
        value && onSubmit(value);
    }}>
        <Input placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
        <Button type="submit">Search</Button>
    </Wrapper>
}