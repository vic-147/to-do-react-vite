import React from "react";

function useLocalStorage(itemName, initilaValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initilaValue })
  );
  const { sincronizedItem, error, loading, item } = state;

  // actions creator
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (parsedItem) =>
    dispatch({ type: actionTypes.success, payload: parsedItem });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  // simular una consulta a una API
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initilaValue));
          parsedItem = initilaValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronizedItem]);

  // persistir la informacion
  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  // sincronizacion
  const syncItem = () => {
    onSincronize();
  };

  return { item, saveItem, loading, error, syncItem };
}

const initialState = ({ initilaValue }) => ({
  sincronizedItem: true,
  loading: true,
  error: false,
  item: initilaValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const redeucerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return redeucerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
