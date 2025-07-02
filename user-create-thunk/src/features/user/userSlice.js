import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ─── GET: Fetch User ─────────────────────────────
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId, thunkAPI) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!res.ok) throw new Error("Failed to fetch user");
      return await res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ─── POST: Create User ───────────────────────────
export const createUser = createAsyncThunk(
  "user/createUser",
  async (newUser, thunkAPI) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) throw new Error("Failed to create user");
      return await res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ─── PUT: Update User ────────────────────────────
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, updatedData }, thunkAPI) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      if (!res.ok) throw new Error("Failed to update user");
      return await res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ─── DELETE: Delete User ─────────────────────────
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId, thunkAPI) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete user");
      return userId; // just return the deleted ID
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ─── Slice ───────────────────────────────────────
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // CREATE
      .addCase(createUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })

      // UPDATE
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })

      // DELETE
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = null; // deleted
        state.status = "succeeded";
      });
  },
});

export default userSlice.reducer;
