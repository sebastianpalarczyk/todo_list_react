import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({theme}) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({theme}) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: filter 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({theme}) => theme.color.forestGreen};

        &:hover{
            filter: brightness(110%);
        }

        &:active{
            filter: brightness(120%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({theme}) => theme.color.crimson};
        &:hover{
            filter: brightness(110%);
        }

        &:active{
            filter: brightness(120%);
        }
    `}

`;

export const LinkTask = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.color.black};

    &:hover{
        text-decoration: solid;
    }
`;