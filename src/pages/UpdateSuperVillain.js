import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function UpdateSuperVillain() {
  const superVillainName = useRef("");
  const franchise = useRef("");
  const powers = useRef("");
  const imageUrl = useRef("");
  //read the id from the brower
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://localhost:7127/SuperVillain/${id}`).then((response) => {
      superVillainName.current.value = response.data.villainName;
      franchise.current.value = response.data.franchise;
      powers.current.value = response.data.powers;
      imageUrl.current.value = response.data.imageUrl;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function UpdateSuperVillainHandler() {
    var payload = {
      villainName: superVillainName.current.value,
      franchise: franchise.current.value,
      powers: powers.current.value,
      imageUrl: imageUrl.current.value,
      id: id,
    };

    axios
      .put("https://localhost:7127/SuperVillain", payload)
      .then((response) => {
        navigate("/");
      });
  }

  return (
    <>
      <legend>Update A SuperVillain</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formSuperVillainName">
          <Form.Label>SuperVillain Name</Form.Label>
          <Form.Control
            type="text"
            ref={superVillainName}
            placeholder="Super Villain Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFranchise">
          <Form.Label>Franchise</Form.Label>
          <Form.Control type="text" ref={franchise} placeholder="Franchise" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPowers">
          <Form.Label>Powers</Form.Label>
          <Form.Control as="textarea" ref={powers} rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type="text"
            ref={imageUrl}
            placeholder="Paste Image Url"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={UpdateSuperVillainHandler}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UpdateSuperVillain;
