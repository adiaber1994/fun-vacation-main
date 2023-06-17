import { ChangeEvent, useEffect, useState } from "react";
import Title from "../components/Title";

export interface VacationPackage {
  _id?: string;
  date: string;
  location: string;
  price: number;
}

enum SortDirection {
  asc = "asc", //A-Z
  desc = "desc", //Z-A
}

const data: Array<VacationPackage> = [
  {
    _id: "a1",
    date: "01/01/23",
    location: "New York",
    price: 1000,
  },
  {
    _id: "a2",
    date: "01/01/23",
    location: "London",
    price: 500,
  },

  {
    _id: "a3",
    date: "01/01/23",
    location: "Ibiza",
    price: 400,
  },
];

function Home() {
  const [vacations, setVacations] = useState<Array<VacationPackage>>([]);
  const [sort, setSort] = useState(SortDirection.asc);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/vacations")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  function handlSort(e: ChangeEvent<HTMLSelectElement>) {
    const direction = e.target.value as SortDirection;
    setSort(direction);

    let result = [...data];
    if (direction === SortDirection.desc) {
      result.sort((a, b) =>
        a.location > b.location ? -1 : a.location < b.location ? 1 : 0
      );
    } else {
      result.sort((a, b) =>
        a.location < b.location ? -1 : a.location > b.location ? 1 : 0
      );
    }

    setVacations(result);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    const term = value.toLowerCase();
    const result = data.filter((vacation) =>
      vacation.location.toLocaleLowerCase().includes(term)
    );
    setVacations(result);
  }

  // function formatDate() {
  //   return new Date(valu).toLocaleDateString();
  // }
  return (
    <>
      <Title mainText="Our Offers" subText="our packages for vacations" />
      <div className="d-flex">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="form-control me-4"
            value={search}
            onChange={handleSearch}
            disabled={vacations.length === 0}
          />
        </div>
        <div>
          <select
            className="form-select"
            value={sort}
            onChange={handlSort}
            disabled={vacations.length === 0}
          >
            <option value={SortDirection.asc}>location A-Z</option>
            <option value={SortDirection.desc}>location Z-A</option>
          </select>
        </div>
      </div>
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
              <td>{vacation.date}</td>
              <td>{vacation.location}</td>
              <td>{vacation.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
