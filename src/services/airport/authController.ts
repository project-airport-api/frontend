// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /login */
export async function login(body: API.LoginRequest, options?: { [key: string]: any }) {
  return request<API.StandardResponseLoginResponse>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
