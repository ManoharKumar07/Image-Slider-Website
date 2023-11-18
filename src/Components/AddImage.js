import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore"; //to add our form data to databaseS
import { imageRef } from "../Firebase/firebase";
import swal from "sweetalert";

const AddImage = () => {
  // creating a usestate for our form
  const [form, setForm] = useState({
    imagelink: "",
    description: "",
  });
  // creating usestate for loader spinner
  const [loading, setLoading] = useState(false);

  // a function to add data to database
  const addimage = async () => {
    setLoading(true);
    await addDoc(imageRef, form);
    swal({
      title: "Successfully Added",
      icon: "success",
      buttons: false,
      timer: 3000,
    });
    // to clear form after storing data in the database
    setForm({
      imagelink: "",
      description: "",
    });
    setLoading(false);
  };

  return (
    <div className="add-box">
      <div className="addimage-container flex flex-col shadow-xl">
        <div className="img-link flex flex-col m-7">
          <label htmlFor="li"> Enter Image Link to add</label>
          <input
            value={form.imagelink}
            onChange={(e) => setForm({ ...form, imagelink: e.target.value })}
            type="text"
            id="li"
            className="mt-1 bg-blue-100"
          />
        </div>
        <div className="img-desc flex flex-col m-7 ">
          <label htmlFor="desc"> Give description to your Image</label>
          <input
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            type="text"
            id="desc"
            className="mt-1 bg-blue-100"
          />
        </div>

        <div className="img-btn my-5 mx-auto bg-blue-400 p-2 hover:bg-blue-500 transition duration-150 ease-out hover:ease-in rounded-md text-white">
          <button className="btn" onClick={addimage}>
            {loading ? <TailSpin height={25} color="white" /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
