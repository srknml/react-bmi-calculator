import styled from "styled-components";
import img from "../../assets/hero4_r.jpg";
export const HeroWrapper = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const HeroTitle = styled.h1`
    margin: 0;
    color: white;
    font-size: 50px;
    font-weight: 500;
`;

export const HeroText = styled.p`
    color: white;
    width: 80%;
    font-size: 25px;
    text-align: center;
    font-weight: 500;
`;
