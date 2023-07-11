import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface AddTodoPayload {
    newTodo: string;
}

const todoSlicer = createSlice({
    name: 'todo',
    initialState: ['Fazer café', 'Estudar Redux', 'Novo estado'],

    reducers: {
        add: (state, action: PayloadAction<AddTodoPayload>) => {
            state.push(action.payload.newTodo)
        }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlicer.reducer
    }
})

export const { add } = todoSlicer.actions
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector