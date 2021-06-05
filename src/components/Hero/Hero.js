import React from "react";

import { HeroWrapper, HeroTitle, HeroText } from "./styles";
function Hero() {
    return (
        <HeroWrapper>
            <HeroTitle>BMI Calculator</HeroTitle>
            <HeroText>
                What is BMI? Body mass index (BMI) is an inexpensive and easy
                screening method for weight category—underweight, healthy
                weight, overweight, and obesity.{" "}
            </HeroText>
        </HeroWrapper>
    );
}

export default Hero;
