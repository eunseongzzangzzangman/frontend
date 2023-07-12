import React from "react";
import { Link } from "react-router-dom";

const ViewUser = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">유저 정보</h2>

          <div className="card">
            <div className="card-header">
              유저ID :
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>이름 : </b>
                </li>
                <li className="list-group-item">
                  <b>유저네임 : </b>
                </li>
                <li className="list-group-item">
                  <b>이메일 : </b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            돌아기기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
