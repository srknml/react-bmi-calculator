import React from "react";
import InputField from "./InputField";
import { FormWrapper, Form } from "./styles";
import LinkButton from "./LinkButton";
function BMIForm({ height, weight, handleClick }) {
    return (
        <FormWrapper>
            <Form>
                <InputField
                    refs={height}
                    placeholder="cm"
                    type="number"
                    name="height"
                    for="height"
                    text="Height"
                />

                <InputField
                    refs={weight}
                    placeholder="kg"
                    type="number"
                    name="weight"
                    for="width"
                    text="Weight"
                />
                <LinkButton to="/result" onClick={handleClick}>
                    Calculate
                </LinkButton>
                <LinkButton to="/history">History</LinkButton>
            </Form>
        </FormWrapper>
    );
}

export default BMIForm;
