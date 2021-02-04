import React, { useEffect } from "react";

export default function User(props) {
  useEffect(() => {
    return()=>{
      console.log("component will unmount");
    };
  });
  return <div>users</div>;
}
