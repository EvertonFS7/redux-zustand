import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface AddTodoPayload {
    newTodo: string;
}

export const store = configureStore({
    reducer: {
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector