import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
// flex: 1 스타일을 설정함으로써 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;


// 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map 을 사용하여 여러개의 TodoItem 컴포넌트를 렌더링