import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";

export default function IdeaLineView(props) {
    return (
        <tr>
            <td>
                <strong>{props.idea.link ? <a href={props.idea.link}>{props.idea.name}</a> : <span>{props.idea.name}</span>}</strong>
            </td>
            <td>{props.idea.description}</td>
            <td>
                <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                    <i className="material-icons">edit</i>
                    <div className="ripple-container" />
                </button>
                <DeleteIdeaModal idea={props.idea} deleteIdea={props.deleteIdea} />
            </td>
        </tr>
    );
}
