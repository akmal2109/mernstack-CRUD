import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Homee = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add");
  };
  const UpdateUser = (elem) => {
    localStorage.setItem("user", JSON.stringify(elem));
    navigate(`/updateuser/${elem._id}`);
  };
  let newArr = [];
  const [baza1, setBaza] = useState([]);
  for (let i = baza1.length - 1; i >= 0; i--) {
    newArr.push(baza1[i]);
  }

  useEffect(() => {
    async function getAll() {
      let res = await axios.get("http://localhost:5005/user/all");
      setBaza(res.data.users);
    }
    getAll();
  }, []);

  // delet user

  const Delete = async (id) => {
    try {
      let res = await axios.delete(
        `http://localhost:5005/user/deleteuser/${id}  `
      );
      if (res.data.success === true) {
        alert("delet user");
      }
    } catch (error) {
      console.log(error);
    }
    window.location.reload(false);
  };
  return (
    <div>
      {" "}
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h2 className="h2"> MERNSTACK CRUDD </h2>
          </div>
          <div className="row mb-3">
            <div
              className="col"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button className="btn btn-info" onClick={handleClick}>
                Qo'shish
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {" "}
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col " className="">
                    #
                  </th>
                  <th scope="col">User Name</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Tel:</th>
                  <th scope="col">Taxrirlash</th>
                  <th scope="col">O'chirish</th>
                </tr>
              </thead>
              <tbody className="table-primary">
                {newArr.map((el, index) => {
                  return (
                    <tr key={index}>
                      <th
                        scope="col"
                        style={{ background: "black", color: "white" }}
                      >
                        {index + 1}
                      </th>
                      <th scope="col">{el.userName}</th>
                      <th scope="col">{el.email}</th>
                      <th scope="col">{el.tel}</th>
                      <th scope="col">
                        {" "}
                        <div
                          className="btn btn-info"
                          onClick={() => UpdateUser(el)}
                        >
                          update
                        </div>{" "}
                      </th>
                      <th scope="col">
                        <div
                          className="btn btn-danger"
                          onClick={() => Delete(el._id)}
                        >
                          delet
                        </div>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
