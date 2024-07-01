
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import { user } from "../types/landing.types";
import AddUser from "./AddUser";

const Landing = () => {
  const [users, setUsers] = useState<user[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(data.data);
    } catch (error) {
      setError("Error Occurred");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <main className="flex flex-col items-center space-y-5 p-5">
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-bold">Users</h1>
        <AddUser/>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {users ? (
          users.map((user) => {
            const username = `${user.first_name} ${user.last_name}`;
            const initials = `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
            return (
              <div className="border p-5 flex rounded-lg items-center gap-5">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={`Avatar for ${username}`} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg font-semibold">{username}</h1>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-sm font-bold text-gray-500"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p>No users yet</p>
        )}
      </div>
    </main>
  );
};

export default Landing;
