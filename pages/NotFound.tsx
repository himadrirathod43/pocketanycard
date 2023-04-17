import Link from 'next/link';
import React from 'react'

export const NotFound = () => {
  return (
    <>
      <div className="container">
        <div
          className="d-flex flex-column justify-content-center align-items-center "
          style={{ height: "100vh" }}
        >
          <div className="notfound-block text-center ">
            <div className="text-col mb-4 d-flex align-items-center justify-content-center">
              <h1>
                OOPS <span>!</span>
              </h1>
            </div>
            <div className="title mb-8 text-dark fw-bolder mt-1 fs-2 mb-3 text-theme">
               Page Not Found
            </div>
            <div className="nor-found-img">
              <img
                src="https://pocketsite.me/assets/images/not-found.png"
                alt="finest-img"
                width="540"
                height="265"
              />
            </div>
            <Link href={"https://pocketsite.me/"}>
              <button
                className="btn btn-primary fw-bolder fs-6 px-7 py-3"
                >
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

