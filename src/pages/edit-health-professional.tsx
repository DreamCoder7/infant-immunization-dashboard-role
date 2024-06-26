import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import EditHealthProfessionalForm from "@/components/form/edit-health-professional-form";
import PageHeader from "@/components/header/page-header";
import { useEditHealthProfessional } from "@/api/useEditHealthProfessional";
import { HealthProfessionalProp } from "@/utils/types/component";

function EditHealthProfessionalPage() {
  // const mutation = useEditHealthProfessional();

  // const handleEdit = (healthProfessional: HealthProfessionalProp) => {
  //   mutation.mutate(healthProfessional);
  // };

  // if (mutation.status === "pending") return <Spinner />;

  // if (mutation.status === "error")
  //   return <Empty resourceName="health-professional" />;

  return (
    <div className="mx-auto w-full rounded mt-1 pb-4 h-[83vh]">
      <PageHeader pageName="HealthProfessional / edit" />
      <div className="mx-auto w-[98%] light:bg-[#f9fafb] dark:bg[#111827] rounded mt-2 py-8 px-6 relative">
        <EditHealthProfessionalForm />
      </div>
    </div>
  );
}

export default EditHealthProfessionalPage;
