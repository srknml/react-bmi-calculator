import React from "react";
import { Input, Label } from "./styles";
function InputField({ refs, text, htmlFor, type, name, placeholder }) {
    return (
        <>
            <Label htmlfor={htmlFor}> {text}</Label>
            <Input
                required
                ref={refs}
                placeholder={placeholder}
                name={name}
                type={type}
            />
        </>
    );
}

export default InputField;
