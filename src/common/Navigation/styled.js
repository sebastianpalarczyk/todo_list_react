import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const List = styled.ul`
   background-color: ${({theme}) => theme.color.teal};
   display: flex;
   justify-content: flex-end;
   margin: 0;
   padding: 0;
   flex-wrap: wrap;
   list-style-type: none;
`;

export const Item = styled.li`
   margin: 30px;
   text-decoration: none;
   font-size: 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName
}))`
    text-decoration: none;
    color: ${({theme}) => theme.color.white};
    
    &.active {
        filter: brightness(70%);
    }

    &:hover {
        text-decoration: underline;
    }
`;