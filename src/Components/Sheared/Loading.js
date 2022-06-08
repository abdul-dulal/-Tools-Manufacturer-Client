import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Loading = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <HashLoader color={"#000000"} loading={loading} css={override} size={80} />
  );
};

export default Loading;
