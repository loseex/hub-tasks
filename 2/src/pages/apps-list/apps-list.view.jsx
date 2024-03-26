import { AppCreateForm } from "../../widgets/app-create-form/app-create-form.component";
import { AppsList } from "../../widgets/apps-list/apps-list.component";

const AppsListView = () => {
  return (
    <div className="w-full max-w-[1280px] px-5">
      <AppCreateForm />
      <hr className="my-5" />
      <AppsList />
    </div>
  );
};

export default AppsListView;
