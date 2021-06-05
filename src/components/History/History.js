import React from "react";
import { DataItem } from "./DataItem";
import { Button } from "../Form/styles";
import { useHistory } from "react-router";
import { Container, List, Item } from "./styles";
const History = (props) => {
    const history = useHistory();
    console.log(props)
    return (
        <Container>
            <h1 style={{ textAlign: "center", margin: "0" }}> Data</h1>
            <List>
                {props.data.map((data) => {
                    return (
                        <Item key={data.id}>
                            <DataItem {...data} removeData={props.removeData} />
                        </Item>
                    );
                })}
            </List>
            <Button style={{ width: 250 }} onClick={() => history.push("/")}>
                {" "}
                Home{" "}
            </Button>
        </Container>
    );
};

export default History;
