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
    margin: 0 auto;
`;
export const ResultWrapper = styled.div`
    display: flex;
    max-width: 800px;
    justify-content: space-around;
    & div {
        margin-bottom: 10px;
    },
    & h2 {
        margin:0;
        font-size: 30px;
        font-weight: 600;
    },
    & p {  
        font-size: 20px;
        font-weight: 500;
    }
`;
export const BMIResults = styled.div`
    background-color: #f2e8a6;
    width: 40%;
    padding: 20px;
`;
export const BMIResultTitle = styled.h1`
    font-size: 25px;
    font-weight: 500;
`;
export const DietWrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #f4d2f8;
`;
