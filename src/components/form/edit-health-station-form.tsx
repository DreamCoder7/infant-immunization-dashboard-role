import { useNavigate, useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { HealthStation } from "@/utils/types/component";
import { useGetHealthStation } from "@/hooks/api/health-station";
import { Spinner } from "../ui";
import ErrorMessage from "../error-display/error-message";

// Health station later to be fetched from the server with params

function EditHealthStationForm({ onEdit }: { onEdit: Function }) {
  const navigate = useNavigate();

  // Find the health station by id
  const { isPending, hs, error } = useGetHealthStation();

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  const {
    // id,
    name,
    type,
    region,
    city,
    subcity,
    kebele,
    houseNumber,
    description,
  } = hs;

  const handleSubmit = () => {
    onEdit();
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Edit health station
      </h1>
      <p className="text-sm mb-6">
        Edit the desired fields below and click the update button to save
        changes
      </p>

      <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="">
            Health station name
          </Label>
          <Input
            id="name"
            className="col-span-3"
            type="text"
            defaultValue={String(name)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-left">
            Health station type
          </Label>
          <Select defaultValue={String(type)}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Choose type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="GENERAL_HOSPITAL">General Hospital</SelectItem>
              <SelectItem value="SPECIALTY_HOSPITAL">
                Specialty Hospital
              </SelectItem>
              <SelectItem value="CLINIC">Clinic</SelectItem>
              <SelectItem value="REHABILITATION_CENTER">
                Rehabilitation Center
              </SelectItem>
              <SelectItem value="DIAGNOSTIC_CENTER">
                Diagnostic Center
              </SelectItem>
              <SelectItem value="MATERNITY_HOSPITAL">
                Maternity Hospital
              </SelectItem>
              <SelectItem value="PSYCHIATRIC_HOSPITAL">
                Psychiatric Hospital
              </SelectItem>
              <SelectItem value="MEDICAL_LABORATORY">
                Medical Laboratory
              </SelectItem>
              <SelectItem value="PHARMACY">Pharmacy</SelectItem>
              {/* <SelectItem value="PEDIATRIC_CLINIC">Pediatric Clinic</SelectItem> */}
              {/* <SelectItem value="SPORTS_MEDICINE_CLINIC">
                Sports Medicine Clinic
              </SelectItem> */}
            </SelectContent>
          </Select>
          {/* <Input id="description" className="col-span-3" /> */}
        </div>

        {/* <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-left">
            Health station region location
          </Label>
          <Select defaultValue={String(region)}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Choose region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="addis">Addis Ababa</SelectItem>
              <SelectItem value="afar">Afar</SelectItem>
              <SelectItem value="amhara">Amhara</SelectItem>

              <SelectItem value="benishangul">Benishangul-Gumuz</SelectItem>
              <SelectItem value="diredawa">Dire Dawa</SelectItem>
              <SelectItem value="gambella">Gambella</SelectItem>
              <SelectItem value="harari">Harari</SelectItem>
              <SelectItem value="oromia">Oromia</SelectItem>
              <SelectItem value="snnpr">Southern Nations (SNNPR)</SelectItem>
              <SelectItem value="tigrai">Tigrai</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="city" className="text-left">
            City
          </Label>
          <Input
            id="city"
            type="text"
            className="col-span-3"
            defaultValue={String(city)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="city" className="text-left">
            Subcity
          </Label>
          <Input
            id="subcity"
            type="string"
            className="col-span-3"
            defaultValue={String(subcity)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="kebele" className="text-left">
            Kebele
          </Label>
          <Input
            id="kebele"
            type="text"
            className="col-span-3"
            defaultValue={String(kebele)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="housenumber" className="text-left">
            House number
          </Label>
          <Input
            id="housenumber"
            type="text"
            className="col-span-3"
            defaultValue={String(houseNumber)}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-left">
            Description (Optional)
          </Label>
          <Textarea
            placeholder="Description..."
            className="col-span-3"
            defaultValue={description || ""}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="images" className="text-left">
            Health station images
          </Label>

          <Input
            id="images"
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            className="col-span-3"
            multiple
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel and go back
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Edit health station
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditHealthStationForm;
