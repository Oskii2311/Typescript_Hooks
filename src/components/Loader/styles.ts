import styled from 'styled-components';

const Loader = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    animation: rotate 2s linear infinite;
    margin: auto;
    width: 50px;
    height: 50px;
    transform: translateX(-25px);
    & .path {
        stroke: #5652bf;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;

export { Loader };
