import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setConnections: (state, action) => {
      if (state.user) {
        state.user.connections = action.payload.connections;
      } else {
        console.error("user connections non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload.jobs;
    },
    setJob: (state, action) => {
      const updatedJobs = state.jobs.map((job) => {
        if (job._id === action.payload.job._id) return action.payload.job;
        return job;
      });
      state.jobs = updatedJobs;
    },
  },
});

export const { setMode, setLogin, setLogout, setConnections, setPosts, setPost, setJobs, setJob } =
  authSlice.actions;
export default authSlice.reducer;
