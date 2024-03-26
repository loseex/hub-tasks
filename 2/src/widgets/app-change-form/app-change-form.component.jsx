import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { usePutApp } from "../../shared/api/usePutApp.hook";
import { useDeleteApp } from "../../shared/api/useDeleteApp.hook";

export const AppChangeForm = ({ uuid, name }) => {
  const [state, setState] = useState({
    origin: name,
    applicationName: name,
  });

  const putRequest = usePutApp();
  const deleteRequest = useDeleteApp();

  const isDisable =
    state.origin === state.applicationName || state.applicationName.lenght < 3;

  return (
    <div className="flex flex-col gap-2">
      <TextInput
        value={state.applicationName}
        onChange={(e) =>
          setState((prev) => ({ ...prev, applicationName: e.target.value }))
        }
        placeholder="Enter app name"
      />
      <Button
        className="w-full"
        color="green"
        onClick={() => putRequest(uuid, state)}
        disabled={isDisable}
      >
        <span>Сохранить</span>
      </Button>
      <Button
        className="w-full"
        color="red"
        onClick={() => deleteRequest(uuid)}
      >
        <span>Удалить</span>
      </Button>
    </div>
  );
};
