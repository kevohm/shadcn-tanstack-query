import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { axiosClient } from "@/main";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Body = {
  first_name: string;
  last_name: string;
  avatar: string;
  email:string
};

const AddUser = () => {
  const [body, setBody] = useState<Body>({
    first_name: "",
    last_name: "",
    avatar: "",
    email:""
  });
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (body:Body) => {
      const { data } = await axiosClient.post("/users", body);
      return data;
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["users"]})
    }
  });
  const handleSubmit = async () => {
    if(!body.first_name || !body.last_name || !body.avatar || !body.email){
      alert("Please provide all details!")
      return
    }
    mutation.mutate(body)
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
          <DialogDescription className="text-gray-500 text-sm">
            Add a new user.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                placeholder="Your First Name"
                value={body.first_name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                placeholder="Your Last Name"
                value={body.last_name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="avatar">Profile</Label>
              <Input
                id="avatar"
                name="avatar"
                placeholder="Your Profile Photo"
                value={body.avatar}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email@gmail.com"
                value={body.email}
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
