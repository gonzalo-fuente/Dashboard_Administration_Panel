// convert object to string and store in localStorage
export const saveToLocalStorage = (data) => {
  try {
    const serialisedData = JSON.stringify(data);
    localStorage.setItem("persistantData", serialisedData);
  } catch (e) {
    console.warn(e);
  }
};

// load string from localStarage and convert into an Object
// invalid output must be undefined
export const loadFromLocalStorage = () => {
  try {
    const serialisedData = localStorage.getItem("persistantData");
    if (serialisedData === null) return undefined;
    return JSON.parse(serialisedData);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};
