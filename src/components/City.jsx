/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";

export default function City() {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div>
      City id:{id}
      <p>
        position:{lat}, {lng}
      </p>
    </div>
  );
}
