declare namespace API {
  type Api = {
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    requestMethod?: string;
    requestHeader?: string;
    responseHeader?: string;
    enabled?: number;
    createdBy?: number;
    createTime?: string;
    updateTime?: string;
    deleted?: number;
  };

  type ApiCreationRequest = {
    name?: string;
    description?: string;
    url?: string;
    requestMethod:
      | 'GET'
      | 'POST'
      | 'PUT'
      | 'PATCH'
      | 'DELETE'
      | 'HEAD'
      | 'OPTIONS'
      | 'TRACE'
      | 'CONNECT';
    requestHeader?: string;
    responseHeader?: string;
  };

  type ApiListRequest = {
    page: number;
    size: number;
    field?: string;
    order?: string;
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    requestMethod?:
      | 'GET'
      | 'POST'
      | 'PUT'
      | 'PATCH'
      | 'DELETE'
      | 'HEAD'
      | 'OPTIONS'
      | 'TRACE'
      | 'CONNECT';
    requestHeader?: string;
    responseHeader?: string;
    enabled?: number;
    createdBy?: number;
  };

  type ApiUpdateRequest = {
    name?: string;
    description?: string;
    url?: string;
    requestMethod?:
      | 'GET'
      | 'POST'
      | 'PUT'
      | 'PATCH'
      | 'DELETE'
      | 'HEAD'
      | 'OPTIONS'
      | 'TRACE'
      | 'CONNECT';
    requestHeader?: string;
    responseHeader?: string;
    enabled?: number;
  };

  type deleteApiParams = {
    id: number;
  };

  type listApiByPageParams = {
    apiListRequest: ApiListRequest;
  };

  type LoginRequest = {
    username?: string;
    password?: string;
  };

  type LoginResponse = {
    token?: string;
    id?: number;
    username?: string;
    nickname?: string;
    role?: 'user' | 'admin';
    avatar?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageApi = {
    records?: Api[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageApi;
    searchCount?: PageApi;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type StandardResponseBoolean = {
    code?: number;
    message?: string;
    data?: boolean;
  };

  type StandardResponseLoginResponse = {
    code?: number;
    message?: string;
    data?: LoginResponse;
  };

  type StandardResponseLong = {
    code?: number;
    message?: string;
    data?: number;
  };

  type StandardResponseObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
  };

  type StandardResponsePageApi = {
    code?: number;
    message?: string;
    data?: PageApi;
  };

  type StandardResponseUser = {
    code?: number;
    message?: string;
    data?: User;
  };

  type updateApiParams = {
    id: number;
  };

  type User = {
    id?: number;
    nickname?: string;
    username?: string;
    role?: string;
    password?: string;
    avatar?: string;
    createTime?: string;
    updateTime?: string;
    deleted?: number;
  };
}
