import React from 'react';
import styled from '@emotion/styled/macro';

const Background = styled.div`
display: flex;
justify-content: center;
height: 100%;
background: #1B95E0;
`;

const Foreground = styled.div`
background: #FFFFFF;
padding: 1rem;
`;

export function Container({ children }: React.PropsWithChildren<{}>) {
    return <Background>
        <Foreground>
            {children}
        </Foreground>
    </Background>
}