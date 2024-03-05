// Create a React component that fetches data from an API endpoint (you can use a mock API or a public one), displays the data in a list format, and allows users to filter the data based on a specific criterion (e.g., name, age, etc.).
import React, {useState, useEffect} from "react";

var url = "";
const fetchData = async () => {
  const response = await fetch("url"); //this is our api endpoint
  const data = await response.json();
  return data;
};

const FilteredList = () => {
  //so we here need data and filter
  const [originalData, setOriginalData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      setOriginalData(data);
      setFilteredData(data);
    };

    fetchDataAndSetState();
  });

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);

    const filteredResults = originalData.filter((item) =>
      item.name.toLowerCase().includes(newFilter.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
