import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
   users: [
    {
        name: "maria",
        email: 'teste',
        password: '123'
    }
   ],
}

const reducerUsers = createSlice({
  name: "reducerUsers",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  }
})

export const store = configureStore({
  reducer: {
    userReducer: reducerUsers.reducer
  }
});

export const { addUser } = reducerUsers.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;