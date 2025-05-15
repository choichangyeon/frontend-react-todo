export const API_URL = process.env.API_URL + "/todos";

export const API_METHOD = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const API_ROUTE_HANDLER_PATH = {
  READ: "/api/read",
  CREATE: "/api/create",
  DELETE: (id: string) => `/api/delete/${id}`,
  UPDATE: (id: string) => `/api/update/${id}`,
};

export const API_HEADER = {
  JSON_HEADER: {
    "Content-Type": "application/json",
  },
};
