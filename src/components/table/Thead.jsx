import React,{useState,useEffect} from 'react'
import { UpCircleFilled, DownCircleFilled } from "@ant-design/icons";
import axios from 'axios';
import tableSort from "table-sort-js/table-sort.js";

function Thead() {
    const [thData, setThData] = useState([]);
    const [filter, setFilter] = useState(false);
    const [filter1, setFilter1] = useState(false);
    const [filter2, setFilter2] = useState(false);
    const [filter3, setFilter3] = useState(false);
    const [filter4, setFilter4] = useState(false);

    //fetchng data for tHead from json
    useEffect(() => {
        axios
          .get("data/tableData.json")
          .then((res) => setThData([...res.data.columnNames])); 
          tableSort()
      }, []);

    //Handle sort order
    const handleFilter = () => {
        setFilter(!filter);
        setFilter1(false);
        setFilter2(false);
        setFilter3(false);
        setFilter4(false);
      };

      const handleFilter1 = () => {
        setFilter(false);
        setFilter1(!filter1);
        setFilter2(false);
        setFilter3(false);
        setFilter4(false);
      };

      const handleFilter2 = () => {
        setFilter(false);
        setFilter1(false);
        setFilter2(!filter2);
        setFilter3(false);
        setFilter4(false);
      };

      const handleFilter3 = () => {
        setFilter(false);
        setFilter1(false);
        setFilter2(false);
        setFilter3(!filter3);
        setFilter4(false);
      };

      const handleFilter4 = () => {
        setFilter(false);
        setFilter1(false);
        setFilter2(false);
        setFilter3(false);
        setFilter4(!filter4);
      };
      
  return (
    <>
    <thead>
              <tr>
                <th>{thData[0]}</th>
                <th>{thData[2]}</th>
                <th className="order-by-desc" onClick={(e) => handleFilter(e)}>
                  {thData[1]}{" "}
                  {!filter ? <UpCircleFilled /> : <DownCircleFilled />}
                </th>
                <th className="order-by-desc" onClick={(e) => handleFilter1(e)}>
                  {thData[7]}% {" "}
                  {!filter1 ? <UpCircleFilled /> : <DownCircleFilled />}
                </th>
                <th className="order-by-desc" onClick={handleFilter2}>
                  {thData[3]}(USD) {" "}
                  {!filter2 ? <UpCircleFilled /> : <DownCircleFilled />}
                </th>
                <th className="order-by-desc" onClick={handleFilter3}>
                  {thData[4]}{' '}
                  {!filter3 ? <UpCircleFilled /> : <DownCircleFilled />}
                </th>
                <th className="order-by-desc" onClick={handleFilter4}>
                  {thData[5]}{' '}
                  {!filter4 ? <UpCircleFilled /> : <DownCircleFilled />}
                </th>
              </tr>
            </thead>
    </>
  )
}

export default Thead