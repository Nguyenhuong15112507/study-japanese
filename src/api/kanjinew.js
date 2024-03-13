import request from "../axios";
const baseUrl = '/api/kanjinew'
export function listKanjiNew() {
return request({
    url: baseUrl,
    method: "get",
})
}
export function createKanjiNew(data) {
    return request({
      url: baseUrl,
      method: "post",
      data,
    });
  }
  export function showDetailKanjiNew(id) {
    return request({
      url: baseUrl + "/" + id,
      method: "get"
    });
  }
  export function showDetailKanjiNewVocabu(id) {
    return request({
      url: baseUrl + "/vocabolary/" + id,
      method: "get"
    });
  }
  export function editKanjiNew(data) {
    return request({
      url: baseUrl,
      method: "put",
      data
    });
  }