import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const ListContainer = styled.div`
    width: 600px;
    height: 40px;
    border: 3px lightblue solid;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
`;

function TodoList(props) {
    const removeList = () => {
        props.onDelete();
    }

    return (
        <ListContainer>
            {props.item}
            <div>
                <Button onClick={removeList}>삭제</Button>
            </div>
        </ListContainer>
    );
}

export default TodoList;