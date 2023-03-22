import useSWR from "swr";
import { config } from "../config";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
const useFetch = (url) => {
  const { data, error, isLoading } = useSWR(`${config.baseUrl + url}`, fetcher);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
