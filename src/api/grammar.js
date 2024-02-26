import request from "../axios";
export function listGrammar() {
  return request({
    url: "/api/grammar",
    method: "get",
  });
}
export function createGrammar(data) {
  return request({
    url: "/api/grammar",
    method: "post",
    data,
  });
}
export function showDetailGrammar(id) {
  return request({
    url: "/api/grammar/" + id,
    method: "get"
  });
}
export function editGrammar(data) {
  return request({
    url: "/api/grammar",
    method: "put",
    data
  });
}