import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useCreateApp } from "../../shared/api/useCreateApp.hook";

export const AppCreateForm = () => {
  const [state, setState] = useState({
    applicationName: "",
  });

  const createRequest = useCreateApp();

  const isDisable = state.applicationName.length < 3;

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
        onClick={() => createRequest(state)}
        disabled={isDisable}
      >
        <span>Создать</span>
      </Button>
    </div>
  );
};
