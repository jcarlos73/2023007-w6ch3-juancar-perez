import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDo from "../../types";

interface ToDosState {
  toDos: ToDo[];
}

const initialToDosState: ToDosState = {
  toDos: [],
};

const toDoSlice = createSlice({
  name: "toDos",
  initialState: initialToDosState,
  reducers: {
    loadToDos: (
      _currentToDosState,
      action: PayloadAction<ToDo[]>,
    ): ToDosState => ({
      toDos: action.payload,
    }),
  },
});

export const todosReducer = toDoSlice.reducer;
