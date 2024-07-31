import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existuser = users.filter((e) => e.id == id);
  const { name, email } = existuser[0];
  const [e_name, setname] = useState(name);
  const [e_email, setemail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: e_name,
        // email: e_email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h3>Update user</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={e_name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            placeholder="enter your email"
            value={e_email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
