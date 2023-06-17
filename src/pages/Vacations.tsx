import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import Title from "../components/Title";
import { VacationPackage } from "./Home";

function Vacations() {
  const [vacations, setVacations] = useState<Array<VacationPackage>>([]);

  useEffect(() => {
    fetch("http://localhost:3000/vacations")
      .then((res) => res.json())
      .then((json) => {
        setVacations(json);
      });
  }, []);

  return (
    <>
      <Title mainText="Vacations" subText="manage vacation packages" />;
      <div>
        <AddForm />

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {vacations.map((vacation) => (
              <tr key={vacation._id}>
                <td>{vacation.location}</td>
                <td>j{vacation.date}</td>
                <td>{vacation.price}</td>
                <td>
                  <button className="btn btn-default">
                    <i className="bi bi-pen"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Vacations;
