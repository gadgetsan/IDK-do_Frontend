import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Container,
  Row,
  Col,
  Card,
  Jumbotron,
  Grid
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Container>
        <Row md={6}>
          <Col>
            <Jumbotron>
              <h1>
                IDK-do (Idée Cadeau) <strong>&alpha;</strong>
              </h1>
              <p>
                Ce logiciel <b>en version &alpha;</b> permet de créer une liste
                d'idée cadeau et de la partager avec des personnes.
                <br />
                <br />
                Prenez note que ce site étant en version &alpha;, il est
                entièrement possible que vous rencontrer des bogues et que vous
                perdiez des données. Utilisez-le à vos risques et périles
              </p>
              <p>
                <br />{" "}
                <Link className="btn btn-primary" to="/login">
                  {" "}
                  Se connecter{" "}
                </Link>
                <br />
                <small style={{ fontSize: "10px" }}>
                  En vous connectant, vous acceptez que ce logiciel est en
                  version alpha et que son créateur n'est pas responsable des
                  pertes de données ou de tout autre problematique relié à
                  l'utilisation de ce logiciel
                </small>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            &copy;{new Date().getFullYear()} Stéphane Beaudet
          </span>
        </div>
      </footer>
    </>
  );
}
/*
export default class HelloUserPage extends Component {
    render = () => {
        return <h1>HELLO WORLD!</h1>;
    };
}
*/
