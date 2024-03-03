import request from "../axios";
export function listAnnounce() {
  return request({
    url: "/api/announce",
    method: "get",
  });
}
export function createAnnounce(data) {
  return request({
    url: "/api/announce",
    method: "post",
    data,
  });
}
export function showDetailAnnounce(id) {
  return request({
    url: "/api/announce/" + id,
    method: "get"
  });
}
export function editAnnounce(data) {
  return request({
    url: "/api/announce",
    method: "put",
    data
  });
}