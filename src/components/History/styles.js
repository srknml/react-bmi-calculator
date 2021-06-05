import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    max-width: 800px;
    position: relative;
    bottom: 50px;
    margin: auto;
    & ul {
        list-style: none;
    }
    & h1 {
        text-align: center;
        margin: 0;
    }
    & p {
        text-align: center;
        font-size: 20px;
    }
`;
export const List = styled.ul`
    padding: 0 8px;
`;
export const Item = styled.li`
    &:nth-child(odd) {
        background-color: rgb(236, 219, 143);
    }
    &:nth-child(even) {
        background-color: rgb(236, 133, 228);
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;

export const ItemText = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    min-width: 200px;
`;
