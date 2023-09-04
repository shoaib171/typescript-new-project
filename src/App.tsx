/** @format */
import React, { useState } from "react";
import "./App.css";
import Header from "./Componnets/Header";
import { Note } from "./NotesInterface/NotedModel";
import List from "./Componnets/List";
import CreateNotes from "./Componnets/createNotes";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  const [NotesData, setNotesData] = useState<Note[]>([]);
  return (
    <>
      <Header />
      <List NotesData={NotesData} setNotesData={setNotesData} />
      <Container>
        <Row>
          <Col>
            <CreateNotes NotesData={NotesData} setNotesData={setNotesData} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
