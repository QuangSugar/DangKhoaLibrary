import React, { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";

const useQuery = (path) => {
  const [error, setError] = useState();
  const [resp, setResp] = useState(false);
  const [loading, setLoading] = useState();

  useEffect(() => {

      let here = true;
      if(path){
        setLoading(true);
        axiosClient
          .get(path)
          .then((res) => {
            if (!here) return;
            setResp(res.data);
          })
          .catch((err) => {
            if (!here) return;
            setError(err.response.data.msg);
          })
          .finally(() => {
            if (!here) return;
            setLoading(false);
          });
      }
   
  }, [path]);
  return {
    data: resp,
    loading,
    error,
  };
};

export default useQuery;
