import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dltuser } from "../UserReducer";
import Create from "./Create";
import { toast, ToastContainer } from "react-toastify";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [click, setclick] = useState(false);
  const [isopen, setopen] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const date = new Date().toDateString();

  const handleopen = () => {
    setopen(!isopen);
  };

  const handledelete = (id) => {
    dispatch(dltuser({ id: id }));
    toast.error("Deleted");
  };

  // Function to handle radio button change

  return (
    <div className="section1">
      <div className="container">
        <div className="header">
          <h2>{date}</h2>
          <button
            onClick={handleopen}
            style={
              !isopen
                ? { backgroundColor: "rgb(74, 228, 74)" }
                : {
                    backgroundColor: "#F62222",
                    fontWeight: "600",
                  }
            }
          >
            {!isopen ? (
              <>
                Create <FaPlus />
              </>
            ) : (
              <>
                close <IoClose style={{ fontSize: "16px" }} />
              </>
            )}
          </button>

          {isopen && <Create />}

          {users.map((e) => {
            return (
              <div key={e.id} className="create1">
                <h4>{e.name}</h4>
                <button onClick={() => handledelete(e.id)}>
                  <IoClose />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
