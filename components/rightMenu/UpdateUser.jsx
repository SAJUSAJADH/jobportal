import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import UpdateButton from "./UpdateButton";

const UpdateUser = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    if (success) router.reload();
  };

  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
            className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-4 w-full md:w-1/2 xl:w-1/3 relative"
          >
            {/* TITLE */}
            <h1 className="text-xl font-semibold">Update Profile</h1>
            <div className="text-xs text-gray-500">
              Use the navbar profile to change the avatar or username.
            </div>
            {/* COVER PIC UPLOAD */}
            <div className="flex flex-col gap-4 my-4">
              <label htmlFor="coverPicture" className="text-xs text-gray-500">
                Cover Picture
              </label>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={user.cover || "/noCover.png"}
                  alt=""
                  width={48}
                  height={32}
                  className="rounded-md object-cover w-12 h-8"
                />
                <span className="text-xs underline text-gray-600">Change</span>
              </div>
            </div>

            {/* FORM FIELDS */}
            <div className="flex flex-wrap gap-4">
              {/* INPUTS */}
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <label htmlFor="firstName" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder={user.name || "John"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <label htmlFor="surname" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder={user.surname || "Doe"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="surname"
                />
              </div>
              {/* ADDITIONAL INPUTS */}
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <label htmlFor="description" className="text-xs text-gray-500">
                  Description
                </label>
                <input
                  type="text"
                  placeholder={user.description || "Life is beautiful..."}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="description"
                />
              </div>
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <label htmlFor="city" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  placeholder={user.city || "New York"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="city"
                />
              </div>
              {/* SCHOOL INPUT */}
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <label htmlFor="school" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  type="text"
                  placeholder={user.school || "MIT"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="school"
                />
              </div>
              {/* WORK INPUT */}
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <label htmlFor="work" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  type="text"
                  placeholder={user.work || "Apple Inc."}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="work"
                />
              </div>
              {/* WEBSITE INPUT */}
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <label htmlFor="website" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  placeholder={user.website || "lama.dev"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="website"
                />
              </div>
            </div>
            {/* BUTTON */}
            <UpdateButton />
            {/* SUCCESS MESSAGE */}
            {success && (
              <span className="text-green-500">Profile has been updated!</span>
            )}
            {/* ERROR MESSAGE */}
            {error && (
              <span className="text-red-500">Something went wrong!</span>
            )}
            {/* CLOSE BUTTON */}
            <div
              className="absolute text-xl right-2 top-3 cursor-pointer"
              onClick={handleClose}
            >
              X
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
