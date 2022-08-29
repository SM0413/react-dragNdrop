import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
  },
});
