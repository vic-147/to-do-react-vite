import React from "react";

function useStoragelistener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODO_V1") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow: toggleShow,
  };
}

export { useStoragelistener };
