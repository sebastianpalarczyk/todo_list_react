import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";



export default () => (
    <Container>
        <Header title="Technologie wykorzystane w projekcie" />
        <Section title="W projekcie zostały użyte biblioteki:"
            body={
                <>
                    <ul>
                        <li>
                            React
                        </li>
                        <li>
                            Redux
                        </li>
                        <li>
                            Redux Saga
                        </li>
                        <li>
                            React Router
                        </li>
                        <li>
                            Styled Components
                        </li>
                    </ul>
                </>}
        />
    </Container>
);