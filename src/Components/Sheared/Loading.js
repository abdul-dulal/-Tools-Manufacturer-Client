import React, { useEffect, useState } from "react";
import SquareLoader from "react-spinners/ClipLoader";
const Loading = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return <SquareLoader color={"#000000"} loading={loading} size={80} />;
};

export default Loading;
