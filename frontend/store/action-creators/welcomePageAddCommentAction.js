import {createAsyncThunk} from "@reduxjs/toolkit";


export const WelcomePageAddCommentAction = createAsyncThunk('welcomePageSlice/addComments', async (cards) => {
    return await new Promise(resolve =>
        setTimeout(() => {
            resolve(cards);
        }, 2000)
    )
})