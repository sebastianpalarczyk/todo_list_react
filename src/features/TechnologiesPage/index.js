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
                        HTML
                    </Item>
                    <Item>
                        CSS (Grid, Flex, media queries)
                    </Item>
                    <Item>
                        JavaScript (ES6+)
                    </Item>
                    <Item>
                        Promise, async / await
                    </Item>
                    <Item>
                        Create React App
                    </Item>
                    <Item>
                        React Hooks
                    </Item>
                    <Item>
                        React Router
                    </Item>
                    <Item>
                        Styled Components
                    </Item>
                    <Item>
                        Redux
                    </Item>
                    <Item>
                        Redux-Saga
                    </Item>
                </List>
            }
        />
    </Container>
);

export default TechnologiesPage;