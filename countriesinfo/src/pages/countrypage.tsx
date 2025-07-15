import { useParams } from "react-router-dom";
import { countries } from "../data/countries";
import { Topbar } from "../components/topbar";

export function CountryPage() {
  const { name } = useParams();
  const country = countries.find((c) => c.name === name);

  return <div className="w-full h-screen">{country?.name}</div>;
}
