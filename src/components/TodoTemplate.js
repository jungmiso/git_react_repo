import React from 'react';
import styled from 'styled-components';

//  Styled Components는 컴포넌트 단위로 적용한 스타일을 외부와 완전히 격리시켜 해당 컴포넌트 내부에서만 유효하도록 해줌

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;     // children는 재사용을 위해서 사용. 자식 엘리먼트를 그대로 출력에 전달 
}

export default TodoTemplate;

// 투두리스트의 레이아웃을 설정하는 컴포넌트