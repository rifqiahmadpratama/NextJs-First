import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import styles from "../../styles/login.module.css";
import Navbar from "../../components/navbar/index";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Logo from "../../assets/images/logo/logo-white.svg";

import ImageBackground from "../../assets/images/background_login.png";

const Login = () => {
  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Fragment>
        <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              <div className={styles.backdroplogin}>
                <div className="mt-4 me-3">
                  <Image
                    className={styles.logo}
                    src={Logo}
                    height={30}
                    alt="Logo"
                  />
                </div>
                <div className="mt-5 py-5">
                  <h1 className="text-white mx-5">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </h1>
                </div>
              </div>
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

                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="form-input submit"
                    className="btn btn-warning my-2 text-light"
                  >
                    Login
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

export default Login;
