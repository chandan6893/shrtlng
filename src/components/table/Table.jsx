import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import tableSort from "table-sort-js/table-sort.js";

import Thead from "./Thead";
import Tbody from "./Tbody";
import Dashboard from "./Dashboard";
import Modal from "react-bootstrap/Modal";
import DragDrop from "./DragDrop";

import "./table.css";

function Table() {
  
  const [tdRbData, setTdRbData] = useState([]);
  const [tdRrData, setTdRrData] = useState([]);
  const [tdRqData, setTdRqData] = useState([]);
  const [Next1, setNext1] = useState(false);
  const [Next2, setNext2] = useState(false);
  const [show, setShow] = useState(false);

  //antD functon for model layout
  function handleShow() {
    setShow(true);
  }

  //fetchng data and stored in respecting variables
  useEffect(() => {
    axios
      .get("data/tableData.json")
      .then((res) => setTdRbData([...res.data.raw_broadmatch_data]));
    axios
      .get("data/tableData.json")
      .then((res) => setTdRrData([...res.data.raw_related_data]));
    axios
      .get("data/tableData.json")
      .then((res) => setTdRqData([...res.data.raw_question_data]));

    tableSort();
  }, []);

  //handle tab navgations
  const jumpToTable1 = () => {
    setNext1(false);
  };

  const jumpToTable2 = () => {
    setNext1(true);
    setNext2(false);
  };

  const jumpToTable3 = () => {
    setNext2(true);
    setNext1(true);
  };

  return (
    <>
      <Dashboard />
      <div className="addto">
        <Button variant="success" onClick={handleShow}>
          Add to list
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Edit Outlines
              <h6>Outlines</h6>
            </Modal.Title>
          </Modal.Header>
          <div className="modal_body">
            <DragDrop data={tdRbData} />
          </div>
          <Button>+ Add Outline</Button>
        </Modal>
      </div>

      <div className="table_map">
        {!Next1 ? (
          <div>
            {" "}
            <div>
              <Button
                variant="primary"
                className="btn-default"
                onClick={jumpToTable1}
              >
                Board Match
              </Button>{" "}
              <Button
                variant="secondary"
                className="btn-default"
                onClick={jumpToTable2}
              >
                Related
              </Button>{" "}
              <Button
                variant="secondary"
                className="btn-default"
                onClick={jumpToTable3}
              >
                Questions
              </Button>{" "}
            </div>
            <table className="table-sort">
              <Thead />
              <Tbody data={tdRbData} />
            </table>
          </div>
        ) : !Next2 ? (
          <div>
            {" "}
            <div>
              <Button
                variant="secondary"
                className="btn-default"
                onClick={jumpToTable1}
              >
                Board Match
              </Button>{" "}
              <Button
                variant="primary"
                className="btn-default"
                onClick={jumpToTable2}
              >
                Related
              </Button>{" "}
              <Button
                variant="secondary"
                className="btn-default"
                onClick={jumpToTable3}
              >
                Questions
              </Button>{" "}
            </div>
            <table>
              <Thead />
              <Tbody data={tdRrData} />
            </table>
          </div>
        ) : (
          <div>
            {" "}
            <div>
              <Button
                variant="secondary"
                className="btn-default"
                onClick={jumpToTable1}
              >
                Board Match
              </Button>{" "}
              <Button
                variant="secondary"
                className="btn-default"
                onClick={jumpToTable2}
              >
                Related
              </Button>{" "}
              <Button
                variant="primary"
                className="btn-default"
                onClick={jumpToTable3}
              >
                Questions
              </Button>{" "}
            </div>
            <table>
              <Thead />
              <Tbody data={tdRqData} />
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Table;
