"use client";
import ProfileModal from "@/components/profile/ProfileModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaEdit, FaUserEdit } from "react-icons/fa";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <div className="max-w-7xl mx-auto my-24 flex flex-col items-center justify-center">
      <Image
        className="rounded-full w-48 h-48"
        width={200}
        height={200}
        src={user?.image}
        alt={user?.name}
      />
      <h1 className="text-2xl font-bold mt-3">{user?.name}</h1>
      <p>{user?.email}</p>
      <ProfileModal user={user}/>
    </div>
  );
};

export default ProfilePage;
