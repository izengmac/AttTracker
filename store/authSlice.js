import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    intialState:{
        token: null,
        userData:null,
        didTryAutoLogin: false,
    },
    reducers: {
        authenticate: (state, action) =>{
            const {payload} = action;
            state.token = payload.token;
            state.userData = payload.userData;
            state.didTryAutoLogin = true;
        },
        setDidTryAutoLogin: (state, action) =>{
            state.didTryAutoLogin = action.payload; 
    }
}
});

export const authenticate= authSlice.actions.authenticate;

export default authSlice.reducer;