const fetchRequest = async (uuid, body) => {
  try {
    const response = await fetch("http://localhost:8080/app/" + uuid, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Error fetch");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const usePutApp = () => {
  return async (uuid, body) => await fetchRequest(uuid, body);
};
