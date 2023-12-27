import { createSlice } from "@reduxjs/toolkit"
import { deletproduct, getproduct, postproduct, updateproduct } from "../api/api"


const initialState = {
    data: [],
    progress: false,
    error: null,
}

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    extraReducers: (bulider) => {
        
        bulider.addCase(getproduct.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(getproduct.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
        bulider.addCase(getproduct.rejected, (state, action) => {
            state.error = true
        })
        
        bulider.addCase(postproduct.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(postproduct.fulfilled, (state, action) => {
            state.data = state.data.concat(action.payload)
        })
        bulider.addCase(postproduct.rejected, (state, action) => {
            state.error = true
        })

        
        bulider.addCase(deletproduct.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(deletproduct.fulfilled, (state, action) => {
            state.data = state.data.filter((e) => e.id !== action.payload)
        })
        bulider.addCase(deletproduct.rejected, (state, action) => {
            state.error = true
        })

        
        bulider.addCase(updateproduct.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(updateproduct.fulfilled, (state, action) => {
            state.data = state.data.map((val) => {
                if (val.id === action.payload.id) {
                    return {
                        ...val, ...action.payload
                    }
                }
                else {
                    return val
                }
            })
        })
        bulider.addCase(updateproduct.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default productSlice.reducer;