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
  Jumbotron
} from "react-bootstrap";
import PageContainer from "../Containers/PageContainer";

export default function HelloUserPage(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <PageContainer>
      <Jumbotron>
        <h1>Bienvenue {user.name}!</h1>
        <p>
          Ceci est un logiciel permettant de partager une liste d'idée de cadeau
          d'échange
        </p>
        <p>
          Vous êtes présentement enregistré avec votre courriel{" "}
          <strong>{user.email}</strong>. vos amis devront utiliser ce courriel
          pour partager leur liste avec vous!
        </p>
      </Jumbotron>
    </PageContainer>
  );
}
/*
export default class HelloUserPage extends Component {
    render = () => {
        return <h1>HELLO WORLD!</h1>;
    };
}
*/
