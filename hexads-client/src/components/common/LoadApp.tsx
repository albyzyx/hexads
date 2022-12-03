import React, { useEffect } from "react";
import useConfig from "../../hooks/useConfig";

const LoadApp = () => {
  const config = useConfig();

  useEffect(() => {}, []); //eslint-disable-line

  return <div>LoadApp</div>;
};

export default LoadApp;
