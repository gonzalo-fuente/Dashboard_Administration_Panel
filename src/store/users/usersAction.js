/* Constants */
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAIL,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./constants";

/* Functions */
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../utils/localStorage";

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  const url =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  /* Check the localStorage to see if we store data,
  if true get and use this data, otherwise Fetch from
  JSONPlaceholder */
  const data = loadFromLocalStorage();
  if (data) {
    return dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } else {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        return response.json();
      })
      .then((data) => {
        saveToLocalStorage(data);
        return dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
      })
      .catch((err) => dispatch({ type: FETCH_USERS_FAIL, payload: err }));
  }
};

export const fetchUser = (id) => (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });

  const url =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  /* Check the localStorage to see if we store data,
  if true get and use this data, otherwise Fetch from
  JSONPlaceholder */
  const data = loadFromLocalStorage();
  if (data) {
    const filteredData = data.filter((user) => user.id == id);
    return dispatch({ type: FETCH_USER_SUCCESS, payload: filteredData });
  } else {
    fetch(`${url}/${id}`)
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        return response.json();
      })
      .then((data) => {
        return dispatch({ type: FETCH_USER_SUCCESS, payload: data });
      })
      .catch((err) => dispatch({ type: FETCH_USER_FAIL, payload: err }));
  }
};

export const addUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER_REQUEST });

  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) throw Error(response.status);
      return response.json();
    })
    .then(() => {
      /* Save data to local Storage, to simulate database writing */
      const data = loadFromLocalStorage();
      data.push(user);
      saveToLocalStorage(data);

      dispatch(fetchUsers());
      return dispatch({ type: SET_USER_SUCCESS });
    })
    .catch((err) => dispatch({ type: SET_USER_FAIL, payload: err }));
};

export const editUser = (user) => (dispatch) => {
  dispatch({ type: EDIT_USER_REQUEST });

  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(`${url}/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) throw Error(response.status);
      return response.json();
    })
    .then(() => {
      /* Update data to local Storage, to simulate database writing */
      const data = loadFromLocalStorage();
      const index = data.findIndex((item) => item.id == user.id);
      data[index] = { ...user };
      saveToLocalStorage(data);

      dispatch(fetchUsers());
      return dispatch({ type: EDIT_USER_SUCCESS });
    })
    .catch((err) => dispatch({ type: EDIT_USER_FAIL, payload: err }));
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });

  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) throw Error(response.status);
      return response.json();
    })
    .then(() => {
      /* Save data to local Storage, to simulate database writing */
      const data = loadFromLocalStorage();
      const users = data.filter((user) => user.id != id);
      saveToLocalStorage(users);

      dispatch(fetchUsers());
      return dispatch({ type: DELETE_USER_SUCCESS });
    })
    .catch((err) => dispatch({ type: DELETE_USER_FAIL, payload: err }));
};
