import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/user/UserSlice";
import JobSlice from "./features/job/JobSlice";
import AllJobsSlice from "./features/AllJobs/AllJobsSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    job: JobSlice,
    allJobs: AllJobsSlice,
  },
});
