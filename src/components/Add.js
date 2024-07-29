import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

import { Form, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
const cookies = new Cookies();
const token = cookies.get("token");

const Add = () => {
  const [date, setDate] = useState(new Date());
  const [steps, setSteps] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [distanceCovered, setDistanceCovered] = useState(0);
  const [weight, setWeight] = useState(0);
  const [submitError, setSubmitError] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [submitmsg, setSubmitMsg] = useState(null);

  const navigate = useNavigate();

  const cookies = new Cookies();
  const token = cookies.get("token");

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const body = {
      date,
      steps,
      caloriesBurned,
      distanceCovered,
      weight,
    };
    console.log("Submited=", body);

    // set configurations
    const configuration = {
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      url: "http://localhost:5000/tracks",
      data: {
        date,
        steps,
        caloriesBurned,
        distanceCovered,
        weight,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        console.log("message", result.data.message);
        setSubmit(true);
        setSubmitMsg(result.data.message);

        navigate("/mydatapage");
      })
      .catch((error) => {
        console.log(error.message);
        setSubmitError(error.response.data.message);
      });
  };

  return (
    <>
      {submit ? (
        <p className="text-success">{submitmsg}</p>
      ) : (
        <p className="text-danger">{submitError}</p>
      )}

      <form className="add" onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Enter records</legend>
          <label htmlfor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlfor="steps">Steps</label>
          <input
            className="add"
            type="number"
            id="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          <br />

          <label htmlfor="caloriesBurned">caloriesBurned</label>
          <input
            className="add"
            type="number"
            id="number"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
          />
          <br />
          <label htmlfor="distanceCovered">distanceCovered</label>
          <input
            className="add"
            type="number"
            id="number"
            value={distanceCovered}
            onChange={(e) => setDistanceCovered(e.target.value)}
          />
          <br />
          <label htmlfor="weight">weight</label>
          <input
            type="number"
            id="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </fieldset>
      </form>
    </>
  );
};

export default Add;
