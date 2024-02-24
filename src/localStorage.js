const acTokenKey = "token";
const rfTokenKey = "rf_token";
const auth = "user";
//lay thong tin luu trong local storage
export const getAcToken = () => {
  return localStorage.getItem(acTokenKey) || "";
};

//luu thong tin vao local storage thong qua key 
export const setAcToken = (token) => {
  localStorage.setItem(acTokenKey, token);
};

//remove thong tin dang luu o local storage by key
export const removeAcToken = () => {
  localStorage.removeItem(acTokenKey);
};
