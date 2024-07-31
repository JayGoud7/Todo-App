import React, { useState } from "react";
import { adduser } from "../UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";

const Create = () => {
  const [name, setname] = useState("");
  // const [email, setemail] = useState("");

  const users = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    dispatch(
      adduser({
        id: newId,
        name: name,
        // email: email,
      })
    );
    navigate("/");
    // setemail("");
    setname("");
  };

  return (
    <div className="create">
      <form onSubmit={handlesubmit}>
        <div className="cr2">
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={(e) => setname(e.target.value)}
            value={name}
            required
          />
          <button onClick={() => toast.success("Created")} type="submit">
            <FaPlus />
          </button>
        </div>
        {/* <div className="create2">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            placeholder="enter your email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
        </div> */}
      </form>
    </div>
  );
};

export default Create;
