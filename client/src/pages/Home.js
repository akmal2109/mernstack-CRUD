import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [baza, setBaza] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getAll() {
      let res = await axios.get("http://localhost:5005/user/all");
      setBaza(res.data.users);
    }
    getAll();
  }, []);

  //   add user
  const addUser = async () => {
    try {
      let add = await axios.post("http://localhost:5005/user/add");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    addUser();
  }, []);
  return (
    <>
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
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Qoshish
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
                {baza.map((el, index) => {
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
                        <div className="btn btn-info">update</div>{" "}
                      </th>
                      <th scope="col">
                        <div className="btn btn-info">delet</div>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade  modal-centered"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="ismni yozing..."
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    required
                    placeholder="email yozing..."
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                  <input
                    type="Number"
                    className="form-control"
                    id="validationCustom03"
                    required
                    placeholder="telni yozing..."
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
