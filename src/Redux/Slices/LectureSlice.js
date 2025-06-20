import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance";

const initialState={
    lectures:[]
}
export const getCourseLectures = createAsyncThunk("/course/lecture/get", async (cid)=>{
    try {
        const response= axiosInstance.get(`/courses/${cid}`);
        toast.promise(response,{
            loading: "Fetching course lectures...",
            success: "Course lectures fetched successfully",
            error: "Failed to fetch course lectures"
        })
        
        return (await response).data;
        
    } catch (error) {
        toast.error(error.response.data.message || "Something went wrong");
    }
});
export const addCourseLectures = createAsyncThunk("/course/lecture/add", async (data)=>{
    try {
        const fromData=new FormData();
        fromData.append("lecture",data.lecture);
        fromData.append("title",data.title);
        fromData.append("description",data.description);

        const response= axiosInstance.post(`/courses/${data.id}`,fromData);
        toast.promise(response,{
            loading: "Adding course lectures...",
            success: "Lectures added successfully",
            error: "Failed to addd course lectures"
        })
        return (await response).data;
        
    } catch (error) {
        toast.error(error.response.data.message || "Something went wrong");
    }
});

export const deleteCourseLectures = createAsyncThunk("/course/lecture/delete", async (data)=>{
    try {
        const response= axiosInstance.delete(`/courses/${data.courseId}/lecture/${data.lectureId}`);
        toast.promise(response,{
            loading: "Deleting course lecture...",
            success: "Course lecture delete successfully",
            error: "Failed to delete course lecture"
        })
        return (await response).data;
        
    } catch (error) {
        toast.error(error.response.data.message || "Something went wrong");
    }
});

const lectureSlice =createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getCourseLectures.fulfilled, (state, action)=>{
            state.lectures=action?.payload?.lectures;

        }).addCase(addCourseLectures.fulfilled, (state, action)=>{
            state.lectures=action?.payload?.course?.lectures;

        })
    }
})

export default lectureSlice.reducer;