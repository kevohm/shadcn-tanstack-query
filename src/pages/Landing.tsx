
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AddUser from "./AddUser";
import { useQuery } from "@tanstack/react-query";
import { user } from './../types/landing.types';
import { axiosClient } from "@/main";

const Landing = () => {
  const {isPending,data,isError,error} = useQuery({
    queryKey:["users"],
    queryFn:async ()=>{
      const {data} = await axiosClient.get("/users")
      return data
    }
  })
  if (isPending) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
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
        {data?.length > 0 ? (
          data?.map((user:user) => {
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
