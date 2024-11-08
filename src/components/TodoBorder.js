import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

const TodoBorderContainer = styled.div`
    width: 680px;
    height: auto;
    border: 3px solid lightblue;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function TodoBorder(props) {
    return (
        <TodoBorderContainer>
            <h1>까먹지 말자!</h1>
            {props.todoList.map(item=><TodoList item={item} onDelete={()=>{props.removeItem(item)}}/>)}
        </TodoBorderContainer>
    );
}

export default TodoBorder;