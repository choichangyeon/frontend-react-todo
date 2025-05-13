export const API_URL = "http://localhost:3000/todos";

export const API_METHOD = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const API_ROUTE_HANDLER_PATH = {
  READ: "/api/read",
  DELETE: (id: string) => `/api/delete/${id}`,
  UPDATE: (id: string) => `/api/update/${id}`,
};

export const API_HEADER = {
  JSON_HEADER: {
    "Content-Type": "application/json",
  },
};
