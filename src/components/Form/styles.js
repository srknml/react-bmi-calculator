import styled from "styled-components";
export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    position: relative;
    bottom: 50px;
`;
export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    label {
        padding-right: 320px;
        font-size: 20px;
    }
    input {
        margin-right: 8px;
    }
`;
export const Input = styled.input`
    display: block;
    width: 100%;
    background-color: #eee;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 10px;
    font-size: 18px;
    box-sizing: border-box;
    &::placeholder {
        font-style: italic;
        font-size: 14px;
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;
export const Label = styled.label`
    text-align: left;
`;
export const Button = styled.button`
    display: block;
    margin: auto;
    background-color: #f7797d;
    font-size: 16px;
    color: #fff;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &: hover {
        color: #fff;
        background-color: #cc1a2c;
    }
`;
