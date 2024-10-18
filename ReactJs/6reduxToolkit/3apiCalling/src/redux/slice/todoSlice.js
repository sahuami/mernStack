import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//Action 
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await response.json()
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },


    extraReducers: (builder) => {
        // Handle the pending state (when the API call is made)
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        });

        // Handle the fulfilled state (when the API call succeeds)
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        // Handle the rejected state (when the API call fails)
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
        });

    }

})


export default todoSlice.reducer