import {configureStore} from '@reduxjs/toolkit'
import postSlice from './reducer/postSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig,postSlice )

export const store= configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  })

export const persistor = persistStore(store)