import styled, { css } from "styled-components";

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
    border-bottom: 1px solid #ddd;

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
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120,61%, 34%);

        &:hover{
            background-color: hsl(120,61%, 39%);
        }

        &:active{
            background-color: hsl(120,61%, 44%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(348,83%, 47%);

        &:hover{
            background-color: hsl(348,83%, 52%);
        }

        &:active{
            background-color: hsl(348,83%, 57%);
        }
    `}

`;