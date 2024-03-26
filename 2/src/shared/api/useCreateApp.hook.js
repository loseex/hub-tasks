const fetchRequest = async (body) => {
  try {
    const response = await fetch("http://localhost:8080/create", {
      method: "POST",
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

export const useCreateApp = () => {
  return async (body) => await fetchRequest(body);
};
