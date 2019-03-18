import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
`;

const Paper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
    width: 400px;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
`;

const Button = styled.button`
    background-color: #eeeeee;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.42);
    &:hover {
        background-color: rgba(238, 238, 238, 0.6);
    }
`;

export { Paper, Button, Container };
