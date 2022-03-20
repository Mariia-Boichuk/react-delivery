import { createStore } from "redux";
import allReducers from "../reduxFeatures/reducers/index";
export function createTestStore() {
  const store = createStore(allReducers);
  return store;
}
