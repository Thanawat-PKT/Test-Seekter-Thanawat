import { createSlice } from '@reduxjs/toolkit';

const id = localStorage.getItem('service_id');

const initialState = {
  service_id: id || '',
  token: ''
};



export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    serviceId: (state, action) => {
      state.service_id = action.payload;
      localStorage.setItem('service_id', action.payload);
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    }
  },
});

export const { serviceId, updateToken } = servicesSlice.actions;
export const dataServiceById = (state) => state.services.service_id
export const dataToken = (state) => state.services.token

export default servicesSlice.reducer;
