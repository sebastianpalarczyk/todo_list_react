import React from "react";
import { toTasks, toTechnologies } from "../../routes";
import { List, Item, StyledNavLink } from "./styled";


const Navigation = () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink exact to={toTasks()}>Lista zadań</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink exact to={toTechnologies()}>Technologie</StyledNavLink>
                </Item>
            </List>
        </nav>
    )
};

export default Navigation;


