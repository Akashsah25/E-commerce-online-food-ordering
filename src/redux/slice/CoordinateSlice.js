import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    latitude: null,
    longitude: null,
    status: false,
    error: null,
    searchedCity: ''
}
export const coordinateFetch = createAsyncThunk("coordinate", async (city) => {
    let coordinateApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0283978172435ad5118d34fc15a1afe4`

    const response = await fetch(coordinateApi);
    const data = await response.json();

    return data;
})
const coordinateSlice = createSlice({
    name: "coordinate",
    initialState,
    reducers: {
        setLongitude: (state, action) => {
            state.longitude = action.payload;
        },
        setLatitude: (state, action) => {
            state.latitude = action.payload;
        }
    },
    extraReducers: (bilder) => {
        bilder
            .addCase(coordinateFetch.pending, (state) => {
                state.status = true;
            })
            .addCase(coordinateFetch.fulfilled, (state, action) => {
                state.status = false;
                state.latitude = action.payload?.coord?.lat;
                state.longitude = action.payload?.coord?.lon;
                state.searchedCity = action.payload?.name;
            })
            .addCase(coordinateFetch.rejected, (state) => {
                state.status = false;
                state.error = "can't fetch the coodinates"
            })
    }
})
export const { setLongitude, setLatitude } = coordinateSlice.actions;
export default coordinateSlice.reducer
