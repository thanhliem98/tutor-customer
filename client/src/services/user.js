import fetch from "cross-fetch";

const host = "http://localhost:3000";

async function register(params) {
  return await fetch(`${host}/user/register`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const userService = { register };
