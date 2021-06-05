import React from "react";
import { Button } from "../Form/styles";
import { ItemContainer, ItemText } from "./styles";
export const DataItem = (props) => {
    const click = (e) => {
        props.removeData(e.target.id);
    };
    return (
        <ItemContainer>
            <ItemText> BMI Score: {props.BMIScore} </ItemText>
            <ItemText> {props.range} </ItemText>
            <Button id={props.id} onClick={click} style={{ margin: 0 }}>
                {" "}
                Delete
            </Button>
        </ItemContainer>
    );
};
