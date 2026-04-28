"use client";
import { authClient } from "@/lib/auth-client";

const ProfileModal = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
  const handleUpdateInfo = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)
    console.log(name, image)
    await authClient.updateUser({
      image,
      name,
    });
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Update Info
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Info</h3>
          <form onClick={handleUpdateInfo}>
          <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input w-full" placeholder="Enter user new name" />
          <label className="label">Enter Image URL</label>
          <input type="file" name="photo" className="file-input w-full" />
          <button type="submit" className="btn btn-neutral mt-4">Save</button>
        </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProfileModal;
