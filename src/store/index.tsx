import { configureStore } from '@reduxjs/toolkit';
import globalStoreReducer from './modules/globalStore';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], //这种写法并不推荐，因为如果新增了state，需要重新配置whitelist，比较麻烦
};

const persistedReducer = persistReducer(persistConfig, globalStoreReducer);

const store = configureStore({
  reducer: {
    globalStore: persistedReducer,
  },
  //内置函数有非序列化问题。
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
