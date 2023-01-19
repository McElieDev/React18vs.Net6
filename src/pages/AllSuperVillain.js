import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

function AllSuperVillain() {
  const [superVillains, setSuperVillains] = useState([]); //set and update state of super villains and
  const [showModal, setShowModal] = useState(false); //set all Modal instances here
  const [itemToDelete, setItemToDelete] = useState(0); //set value of item to delete

  const navigate = useNavigate();
  //const [refreshInterval, setRefreshInterval] = useState(1 || 0);
  //const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  // useEffect(() => {
  //   if (refreshInterval && refreshInterval > 0) {
  //     const interval = setInterval(fetchMetrics, refreshInterval);
  //     return () => clearInterval(interval);
  //   }
  // }, [refreshInterval]);

  useEffect(() => {
    axios.get("https://localhost:7127/SuperVillain").then((response) => {
      setSuperVillains((existingData) => {
        return response.data;
      });
    });
    //  forceUpdate();
  }, []);

  //Auto refresh interval to 1 minutes : 60 to 5 minutes 300
  // setInterval(function () {
  //   window.location.href = "/";
  //   //window.location.reload();
  //   //navigate("/");
  // }, 60000);

  function showConfirmPopupHandler(id) {
    setShowModal(true);
    setItemToDelete(id);
  }

  function closeConfirmPopupHandler() {
    setShowModal(false);
    setItemToDelete(0);
  }

  function deleteConfirmPopupHandler() {
    axios
      .delete(`https://localhost:7127/SuperVillain/${itemToDelete}`)
      .then((response) => {
        //removing the deleted item from the list after deletion
        setSuperVillains((existingData) => {
          return existingData.filter((_) => _.id !== itemToDelete);
        });
        setItemToDelete(0);
        //if deleted successfully then hide the modal  - After all processes have finished
        setShowModal(false);
      });
  }

  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation!"
        body="Are you sure you want to delete this item?"
        closeConfirmation={closeConfirmPopupHandler}
        deleteConfirmation={deleteConfirmPopupHandler}
      ></DeleteConfirmation>

      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              navigate("/add-supervillain/");
            }}
          >
            Add A SuperVillain
          </Button>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4 mt-1">
        {superVillains.map((sv) => (
          <Col key={sv.id}>
            <Card>
              <Card.Img variant="top" src={sv.imageUrl} />
              <Card.Body>
                <Card.Title>{sv.villainName}</Card.Title>
                <Card.Text>
                  <b>Franchise: </b> {sv.franchise}
                </Card.Text>
                <Card.Text>
                  <b>Powers: </b> {sv.powers}
                </Card.Text>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    navigate(`/update-supervillain/${sv.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => {
                    showConfirmPopupHandler(sv.id);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllSuperVillain;
