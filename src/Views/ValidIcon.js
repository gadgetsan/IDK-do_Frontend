import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";

export default function ValidIcon(props) {
    if (props.value) {
        return (
            <button className="btn btn-success btn-link btn-sm" style={{ padding: "0px", margin: "0px" }}>
                <i className="material-icons">check</i>
            </button>
        );
    } else {
        return (
            <button className="btn btn-danger btn-link btn-sm" style={{ padding: "0px", margin: "0px" }}>
                <i className="material-icons">close</i>
            </button>
        );
    }
}
