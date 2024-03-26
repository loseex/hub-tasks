import { Spinner } from "flowbite-react";

export const Preloader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner size="xl" />
    </div>
  );
};
