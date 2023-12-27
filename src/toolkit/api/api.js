import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get 
export const getproduct = createAsyncThunk("getproduct", async () => {
    return axios.get("http://localhost:3001/posts").then((res) => {
        const data = res.data

        return {
            data
        }
    })
})

// post 
export const postproduct = createAsyncThunk("postproduct", async (data) => {
    return axios.post("http://localhost:3001/posts", data).then((res) => {
        const data = res.data

        return data
    })
})

// delete 
export const deletproduct = createAsyncThunk("deletproduct", async (id) => {
    return axios.delete("http://localhost:3001/posts/" + id).then((res) => {
        const data = res.data

        return id
    })
})

// update 
export const updateproduct = createAsyncThunk("updateproduct", async (data) => {
    return axios.put("http://localhost:3001/posts/" + data.id, data).then((res) => {
        const data = res.data

        return data
    })
})