import React from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">가입 하기</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="이름 입력"
                name="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="유저네임 입력"
                name="username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="이메일 입력"
                name="email"
              />
            </div>

            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-primary px-3 mx-2"
              >
                가입
              </button>
              <Link to="/" className="btn btn-outline-danger px-3 mx-2">
                취소
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
