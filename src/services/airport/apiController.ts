// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api */
export async function addApi(body: API.ApiCreationRequest, options?: { [key: string]: any }) {
  return request<API.StandardResponseLong>('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/${param0} */
export async function deleteApi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteApiParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /api/${param0} */
export async function updateApi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateApiParams,
  body: API.ApiUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.StandardResponseBoolean>(`/api/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
