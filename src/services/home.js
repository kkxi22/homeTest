import request from './request';

export function postFormData(data) {
  return request({
    url: "/fake-auth",
    data,
    method: "POST"
  })
}