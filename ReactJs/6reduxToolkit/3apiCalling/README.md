1. Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous logic, such as fetching data from an API or performing side effects like logging.(means jb bhi hume koi delays task krana hota hai toh hum redux thunk ka use kr skte hai)

2 .The redux toolkit simplifies the use of Redux by providing utilities like createAsyncThunk, which is a built-in way to handle async logic, such as API calls, and automatically handles action creation for pending, fulfilled, and rejected states.

3.createAsyncThunk accepts three parameters: 
a string action type value, 
a payloadCreator callback, and 
an options object.


4. Syntax:
createAsyncThunk(typePrefix, payloadCreator)

typePrefix: A string that becomes the action type prefix (e.g., 'user/fetchUserData'). Redux Toolkit automatically appends /pending, /fulfilled, and /rejected to it.

payloadCreator: A function that performs the async operation and returns a promise. It can also take arguments, such as IDs or parameters, to use in the async function.


 5. extraReducer is a function jisme builder hota hai jo listen krega  to fetch todosdata  
    The builder object allows you to chain methods like addCase to respond to specific action types. In the case of createAsyncThunk, it listens for the pending, fulfilled, and rejected action types.
