import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default function HelloUserPage(props) {
    localStorage.removeItem("user");
    return <Redirect to="/login" />;
}
