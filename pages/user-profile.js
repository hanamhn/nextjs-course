import React from "react";

const UserProFilePage = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
};

export default UserProFilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log("Server side code");
  return {
    props: {
      username: "Max",
    },
  };
}
