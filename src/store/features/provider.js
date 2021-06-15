import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProviderService from "../../api/provider";

export const searchProvider = createAsyncThunk(
  "provider/searchProvider",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await ProviderService.searchProvider(payload);
      return response;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getProviderCities = createAsyncThunk(
  "provider/getProviderCities",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProviderService.getCities();
      return response.data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);
const initialState = {
  providerWrapper: {},
  specialities: [],
  cities: ["BEDFORD", "BETHLEHEM", "CHARLESTON"],
  providersOption: [],
  loading: true,
  error: "",
};
const { reducer } = createSlice({
  name: "provider",
  initialState,
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [searchProvider.fulfilled]: (state, { meta, payload }) => {
      // Add user to the state array
      console.log(" meta >> " + payload);
      state.providerWrapper = payload;
      console.log(" state >> " + state.providerWrapper);
      state.loading = false;
    },
    [searchProvider.pending]: (state, { meta }) => {
      // Add user to the state array
      console.log(" meta >> " + meta);
      state.loading = true;
    },
    [searchProvider.rejected]: (state, { meta, payload, error }) => {
      // Add user to the state array
      console.log(" meta >> " + meta);
      state.loading = false;
      state.providerWrapper = {};
      state.error = error;
    },

    [getProviderCities.fulfilled]: (state, { meta, payload }) => {
      // Add user to the state array
      console.log(" meta >> " + meta);
      state.cities.push(payload);
      state.loading = false;
    },
    [getProviderCities.pending]: (state, { meta }) => {
      // Add user to the state array
      console.log(" meta >> " + meta);
      state.loading = true;
    },
    [getProviderCities.rejected]: (state, { meta, payload, error }) => {
      // Add user to the state array
      console.log(" meta >> " + meta);
      state.loading = false;
      state.cities.push(payload);
      state.error = error;
    },
  },
});

export default reducer;
