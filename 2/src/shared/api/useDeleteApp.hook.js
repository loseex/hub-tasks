const fetchRequest = async (uuid) => {
  try {
    const response = await fetch("http://localhost:8080/app/" + uuid, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

export const useDeleteApp = () => {
  return async (uuid) => await fetchRequest(uuid);
};
