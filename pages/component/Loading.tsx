import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loader" style={{ textAlign : "center" }}>
        <img src={`/assets/images/misc/loader.gif`} alt="" width={300} height={300}></img>
      </div>
    </>
  );
};

export default Loading;
