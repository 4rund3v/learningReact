export const api =
  process.env.REACT_APP_CONTACTS_API_URL || "http://192.168.1.44:4293";
export const staticApi = api;

let token = "7e9bd56d9448";

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  client_id: token,
};

export const getAll = () =>
  fetch(`${api}/personalities`, { headers })
    .then((res) => res.json())
    .then((data) => data.personalities);

export const remove = (contact) =>
  fetch(`${api}/personalities/${contact.id}`, { method: "DELETE", headers })
    .then((res) => res.json())
    .then((data) => data.contact);

export const create = (body) =>
  fetch(`${api}/personalities`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
