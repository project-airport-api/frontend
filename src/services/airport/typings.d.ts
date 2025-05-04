declare namespace API {
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
