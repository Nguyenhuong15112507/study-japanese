import request from "../axios";
const baseUrl = "/api/category";
export function listCategories() {
  return request({
    url: baseUrl + "/",
    method: "get",
  });
}
export function listCategoriesByType(type) {
  return request({
    url: baseUrl + "/type/" + type,
    method: "get",
  });
}
export function getDetailCategory(id) {
  return request({
    url: baseUrl + "/" + id,
    method: "get"
  });
}
export function createCategory(data) {
  return request({
    url: baseUrl,
    method: "post",
    data,
  });
}
export function editCategory(id) {
  return request({
    url: baseUrl + "/" + id,
    method: "put",
    data,
  });
}

