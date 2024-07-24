// src/thunks/profile.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../../constants/config";

// Define the updateProfile thunk
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (formData, { rejectWithValue }) => {
    try {
      // Replace with your API endpoint
      const response = await axios.put(
        `${server}/api/v1/user/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure correct headers for file upload
          },
          withCredentials: true,
        }
      );
      console.log("sending", formData);
      toast.success("Profile updated successfully!");
    
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
      return rejectWithValue(error.response?.data);
    }
  }
);
