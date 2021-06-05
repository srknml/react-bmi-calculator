import React, { useEffect, useState } from "react";
import { Container, ResultWrapper, BMIResults, DietWrapper } from "./styles";
import { Button } from "../Form/styles";
import { useHistory } from "react-router-dom";
function Result({ result, dataUpdate }) {
    const [rangeColor] = useState();
    const history = useHistory();

    useEffect(() => {
        dataUpdate((prev) => [...prev, result]);
    }, [dataUpdate, result]);

    return (
        <Container>
            <ResultWrapper>
                <BMIResults>
                    <h2>Your IBM Score: {result.BMIScore} </h2>
                    <p> {result.range} </p>
                </BMIResults>
                <DietWrapper>
                    <h2>DIET</h2>
                    <p>BLABLABLA</p>
                </DietWrapper>
            </ResultWrapper>
            <Button onClick={() => history.push("/")}> Recalculate</Button>
        </Container>
    );
}

export default Result;
