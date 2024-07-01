import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useState } from "react";

interface Body {
  job: string;
  name: string;
}

const AddUser = () => {
  const [body, setBody] = useState<Body>({ job: "", name: "" });
  const handleSubmit = async () => {
    try {
        await axios.post("https://reqres.in/api/users", body)
    } catch (error) {
        alert("Error Occurred")
    }
    console.log("submitted", body);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setBody({ ...body, [name]: value });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-lg">Create User</DialogTitle>
          <DialogDescription className="text-gray-500 text-sm">Add a new user.</DialogDescription>
        </DialogHeader>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name of user"
                  value={body.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="job">Job</Label>
                <Input
                  id="job"
                  name="job"
                  placeholder="user's  job"
                  value={body.job}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </form>
        <DialogFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
