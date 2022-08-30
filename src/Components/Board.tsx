import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.h1`
  display: flex;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}
export function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId.toUpperCase()}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            <div
              style={{ backgroundColor: "red" }}
              ref={magic.innerRef}
              {...magic.droppableProps}
            >
              {toDos.map((toDo, index) => (
                <DragabbleCard key={toDo} index={index} toDo={toDo} />
              ))}
              {magic.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}
