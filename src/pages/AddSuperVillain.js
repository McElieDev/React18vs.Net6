import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddSuperVillain() {
  const superVillainName = useRef("");
  const franchise = useRef("");
  const powers = useRef("");
  const imageUrl = useRef("");

  const navigate = useNavigate();

  function AddSuperVillainHandler() {
    var payload = {
      villainName: superVillainName.current.value,
      franchise: franchise.current.value,
      powers: powers.current.value,
      imageUrl: imageUrl.current.value,
    };

    axios
      .post("https://localhost:7127/SuperVillain", payload)
      .then((response) => {
        //if post is successful, redirect to SuperVillain Main page
        //Navigate to HomePage
        navigate("/");
      });
  }

  return (
    <>
      <legend>Add A New SuperVillain</legend>
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
          onClick={AddSuperVillainHandler}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddSuperVillain;
