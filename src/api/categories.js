import request from "../axios";
const baseUrl = '/api/teacher'
export function listCategories() {
return request({
    url: baseUrl,
    method: "get",
})
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
      data
    });
  }