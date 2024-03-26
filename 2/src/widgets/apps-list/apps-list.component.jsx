import { useGetApps } from "../../shared/api/useGetApps.hook";
import { AppCard } from "../app-card/app-card.component";
import { Preloader } from "../preloader/preloader.component";

export const AppsList = () => {
  const { data, IsLoading } = useGetApps();

  return (
    <>
      {IsLoading && <Preloader />}
      <div className="flex flex-col gap-5">
        {data.map((item) => (
          <AppCard key={item.applicationId} {...item} />
        ))}
      </div>
    </>
  );
};
