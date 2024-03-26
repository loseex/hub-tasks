import { useGetApp } from "../../shared/api/useGetApp.hook";

import { useParams } from "react-router-dom";
import { Preloader } from "../../widgets/preloader/preloader.component";
import { AppChangeForm } from "../../widgets/app-change-form/app-change-form.component";

const AppPageView = () => {
  const { uuid } = useParams();
  const { data, IsLoading } = useGetApp(uuid);

  if (IsLoading || !data) {
    return <Preloader />;
  }

  return (
    <div className="w-full max-w-[1280px] px-5">
      <AppChangeForm uuid={uuid} name={data.applicationName} />
      <hr className="my-5" />
    </div>
  );
};

export default AppPageView;
