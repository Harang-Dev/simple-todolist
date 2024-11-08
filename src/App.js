import React, { useState } from "react";
import styled from 'styled-components';
import "./App.css"
import TodoBorder from "./components/TodoBorder";
import { Button } from 'antd';

const StyledInput = styled.input`
    width: 600px;
    height: 50px;
    border: 3px solid lightblue;
`;

function App() {

    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const AddItem = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue('');
    }

    const RemoveItem = (removeItem) => {
        setTodoList(todoList.filter(item => (item !== removeItem)
        ))
    }

    return (
        <div style={{}}>
            <h1>TodoList</h1>
            <StyledInput type="text" placeholder="할일을 작성하고 등록버튼을 눌러주세요" value={inputValue} onChange={event => setInputValue(event.target.value)} />
            <Button style={{marginLeft: 20}} onClick={AddItem}>등록</Button>
            <TodoBorder todoList={todoList} removeItem={RemoveItem} />
        </div>
    )
}

export default App;