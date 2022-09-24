import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import Navbar from "../../components/navbar/index";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ImageProfile from "../../assets/images/home_1.png";

const Register = () => {
  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Fragment>
        <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              <Image
                src={ImageProfile}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="col-6">
              <form
                //   onSubmit={handleCreate}
                className="w-100 form-sign-up"
              >
                <div className="text-center">
                  <h2 className="text-warning">Halo, Pewpeople</h2>
                  <h6 className="text-muted">
                    Lorem ipsum sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui dui rhocus auctor
                  </h6>
                </div>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-input form-control"
                    id="name"
                    placeholder="Enter Name"
                    // onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-input form-control"
                    id="email"
                    placeholder="Enter Email address"
                    // onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-input form-control"
                    id="phone"
                    placeholder="08xxxxxxxxxx"
                    // onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-input form-control"
                    id="password"
                    placeholder="Enter Password"
                    // onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirmation Password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    id="confirm_password"
                    placeholder="Enter Confirmation Password"
                    // onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <input
                    className="form-input form-check-input"
                    type="checkbox"
                    value=""
                    id="agree-user"
                    // onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="agree-user">
                    &nbsp; I agree to terms & conditions
                  </label>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="form-input submit"
                    className="btn btn-warning my-2 text-light"
                  >
                    Register
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p className="text-muted">Already have account?</p>
                  {/* <Link className="text-warning text-decoration-none" to={"../sign-in"}>
                    &nbsp;Log in Here
                  </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Register;
