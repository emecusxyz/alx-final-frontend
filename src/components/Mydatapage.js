import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Container, Col, Row } from "react-bootstrap";

import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Timer from "./Timer";

const cookies = new Cookies();
const token = cookies.get("token");

const config = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    // "Access-Control-Allow-Origin": "http://localhost:3000",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  credentials: "include",
};
const baseURL = "https://alx-final-frontend-1.onrender.com/tracks/single";

// const con = {
//   config,
//   withCredentials: true,
// }

// const client = axios.create({
//   baseURL: "http://localhost:5000/user",
//   config,
//   withCredentials: true,
// });

const Mydatapage = () => {
  const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   const fet = async () =>
  //     await client.get("?_limit=10").then((response) => {
  //       setDatas(response.data);
  //     });
  // }, [datas]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(baseURL, config);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setDatas(listItems);
        console.log("kkjd", datas);
      } catch (error) {
        console.error(error.message);
      } finally {
        console.error(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <Row>
      <Col></Col>
      <Col>
        <div className="app">
          <h2>All datas </h2>
          <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Steps</th>
                <th>caloriesBurned</th>
                <th>distanceCovered</th>
                <th>weight</th>
              </tr>
            </thead>

            {datas.map((post) => {
              return (
                // <div className="post-card" key={post.id}>
                //   <h2 className="post-title">{post.first_name}</h2>
                //   <p className="post-body">{post.last_name}</p>
                //   <div className="button">
                //     <div className="delete-btn">Delete</div>
                //   </div>
                // </div>
                <tbody key={post._id}>
                  <tr>
                    <td>{post.date}</td>
                    <td>{post.steps}</td>
                    <td>{post.caloriesBurned}</td>
                    <td>{post.distanceCovered}</td>
                    <td>{post.weight}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default Mydatapage;
