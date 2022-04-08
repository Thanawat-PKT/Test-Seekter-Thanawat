import { createSlice } from '@reduxjs/toolkit';

const id = localStorage.getItem('service_id');

const initialState = {
  service_id: id || ''
};



export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    serviceId: (state, action) => {
      state.service_id = action.payload;
      localStorage.setItem('service_id', action.payload);
    }
  },
});

export const { serviceId } = servicesSlice.actions;
export const dataServiceById = (state) => state.services.service_id

export default servicesSlice.reducer;
