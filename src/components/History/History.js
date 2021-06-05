import React from "react";
import { DataItem } from "./DataItem";
import { Button } from "../Form/styles";
import { useHistory } from "react-router";
import { Container, List, Item } from "./styles";
const History = ({ removeData, data }) => {
    const history = useHistory();
    return (
        <Container>
            <h1> Data</h1>

            {data.length !== 0 ? (
                <List>
                    {data.map((data) => {
                        return (
                            <Item key={data.id}>
                                <DataItem {...data} removeData={removeData} />
                            </Item>
                        );
                    })}
                </List>
            ) : (
                <p> There is no data. </p>
            )}

            <Button style={{ width: 250 }} onClick={() => history.push("/")}>
                {" "}
                Home{" "}
            </Button>
        </Container>
    );
};

export default History;
