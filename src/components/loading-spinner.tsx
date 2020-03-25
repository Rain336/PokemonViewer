import styled from '@emotion/styled/macro';

export const LoadingSpinner = styled.div`
position: relative;
width: 192px;
height: 192px;

&::before {
    content: ' ';
    position: absolute;
    top: 16px;
    left: 16px;
    background-color: #1B95E0;
    width: 32px;
    height: 32px;
    animation: loading 3.5s ease infinite;
}

@keyframes loading {
    25% {
        transform: translateX(128px);
    }

    50% {
        transform: translate(128px, 128px);
    }

    75% {
        transform: translateY(128px);
    }
}
`;