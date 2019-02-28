import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";

export default function SharedWithMeListView(props) {
    var selectKeyCallback = function() {
        props.selected(props.shared.rowid);
    };
    return (
        <a className={props.isSelected ? "btn btn-info btn-link" : "btn btn-link"} onClick={selectKeyCallback}>
            {props.shared.name}({props.shared.email})
        </a>
    );
}
