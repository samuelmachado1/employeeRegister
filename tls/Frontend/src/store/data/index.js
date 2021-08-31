import { createAction, createReducer } from "@reduxjs/toolkit";

const API = "http://localhost:3333";
const INITIAL_STATE = {
  offices: [],
  employees: [],
  error: null,
};

// Actions
export const loadedAllOfficesSuccess = createAction(
  "LOADED_ALL_OFFICES_SUCCESS"
);

export const loadedAllEmployeeSuccess = createAction(
  "LOADED_ALL_EMPLOYEE_SUCCESS"
);
export const loadOfficesError = createAction("LOAD_OFFICES_ERROR");
export const loadEmployeeError = createAction("LOAD_EMPLOYEE_ERROR");
// export const loadedStateSuccess = createAction("LOADED_STATE_SUCCESS");
// export const loadedCountySuccess = createAction("LOADED_COUNTY_SUCCESS");
// export const loadedCountyError = createAction("LOADED_COUNTY_ERROR");
// export const getStateItem = createAction("GET_STATE_ITEM");

// Fetchs
export const fetchOffices = () => {
  return (dispatch) => {
    return fetch(`${API}/office`)
      .then((res) => res.json())
      .then((data) => dispatch(loadedAllOfficesSuccess(data)))
      .catch((error) => dispatch(loadOfficesError(error)));
  };
};

// export const fetchStateById = (uf) => {
//   return (dispatch) => {
//     return fetch(`${API}/localidades/estados/${uf}/municipios`)
//       .then((res) => res.json())
//       .then((data) => dispatch(loadedStateSuccess(data)))
//       .catch((error) => dispatch(loadStatesError(error)));
//   };
// };

// export const fetchCounty = (id) => {
//   return (dispatch) => {
//     return fetch(`${API}/localidades/municipios/${id}/distritos`)
//       .then((res) => res.json())
//       .then((data) => dispatch(loadedCountySuccess(data)))
//       .catch((error) => dispatch(loadedCountyError(error)));
//   };
// };

export default createReducer(INITIAL_STATE, {
  [loadedAllOfficesSuccess]: (state, action) => ({
    ...state,
    offices: action.payload,
  }),
  [loadedAllEmployeeSuccess]: (state, action) => ({
    ...state,
    employees: action.payload,
  }),
  [loadOfficesError]: (state, action) => ({ ...state, error: action.payload }),
  [loadEmployeeError]: (state, action) => ({ ...state, error: action.payload }),
  //   [loadedStateSuccess]: (state, action) => ({
  //     ...state,
  //     stateItem: action.payload,
  //   }),
  //   [loadedCountyError]: (state, action) => ({ ...state, error: action.payload }),
  //   [loadedCountySuccess]: (state, action) => ({
  //     ...state,
  //     countyItem: action.payload,
  //   }),
});