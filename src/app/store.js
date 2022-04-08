import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../features/services/servicesSlice';

export const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});
