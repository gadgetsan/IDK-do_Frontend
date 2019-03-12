import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";

export default function SharedWithMeListView(props) {
    var selectKeyCallback = function() {
        props.selected(props.shared.rowid);
    };
    return (
        <tr className="list-line" onClick={selectKeyCallback} style={{ cursor: "pointer" }} title={props.shared.name + " (" + props.shared.email + ")"}>
            <td className="list-item">
                <div className="list-item-container">
                    <span className={props.isSelected ? "list-item-title text-info" : "list-item-title"}>
                        {props.shared.name} ({props.shared.email})
                    </span>
                </div>
            </td>
        </tr>
    );
}
