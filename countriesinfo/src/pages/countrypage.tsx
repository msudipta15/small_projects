import { useParams } from "react-router-dom";

export function CountryPage() {
  const { name } = useParams();
  return <div className="w-full h-screen">{name}</div>;
}
