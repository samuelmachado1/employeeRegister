import { configureStore } from "@reduxjs/toolkit";

import employee from "./employee";

export default configureStore({
  reducer: {
    employee,
  },
});
