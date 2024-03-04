import request from "../axios";
const baseUrl = "/api/teacher";
export function listCategories(kbn) {
  return request({
    url: baseUrl + "/" + kbn,
    method: "get",
  });
}
export function createCategory(data) {
  return request({
    url: baseUrl,
    method: "post",
    data,
  });
}
export function editCategory(data) {
  return request({
    url: baseUrl,
    method: "put",
    data,
  });
}
