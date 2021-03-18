import env from "../env.json";

const { urlBackend } = env;

const request = async (value) => {
  const result = await fetch(urlBackend, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(value),
  });
  return await result.json();
};

export { request };
