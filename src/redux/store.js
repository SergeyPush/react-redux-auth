import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import rootReducer from "./rootReducer";

import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"]
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer)
});

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);

// export default { store, persistor };
