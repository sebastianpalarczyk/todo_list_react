import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { List, Item } from "./styled";

const TechnologiesPage = () => (

    <Container>
        <Header title="Technologie wykorzystane w projekcie" />
        <Section title="W projekcie zostały użyte biblioteki:"
            body={
                <List>
                    <Item>
                        React
                    </Item>
                    <Item>
                        Redux
                    </Item>
                    <Item>
                        Redux Saga
                    </Item>
                    <Item>
                        React Router
                    </Item>
                    <Item>
                        Styled Components
                    </Item>
                </List>
            }
        />
    </Container>
);

export default TechnologiesPage;