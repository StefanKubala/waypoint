/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div>
      <span>{lat}</span>
      <span>{lng}</span>
    </div>
  );
}
