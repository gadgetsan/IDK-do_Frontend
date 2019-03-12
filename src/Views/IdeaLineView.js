import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";

export default function IdeaLineView(props) {
    return (
        <tr className="list-line">
            <td className="list-item">
                <div className="list-item-container">
                    <span className="list-item-title">
                        {props.idea.link ? <a href={props.idea.link}>{props.idea.name}</a> : <span>{props.idea.name}</span>}
                    </span>
                    {props.idea.description ? " - " : ""}
                    <small>{props.idea.description}</small>
                    <div className="list-actionBox">
                        <DeleteIdeaModal idea={props.idea} deleteIdea={props.deleteIdea} />
                        <a title="Modifier cette idée" rel="tooltip" className="text-primary" data-original-title="Edit Task">
                            <i className="material-icons">edit</i>
                        </a>
                    </div>
                </div>
            </td>
        </tr>
    );
}

/*

                <span>
                    <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                        <i className="material-icons">edit</i>
                        <div className="ripple-container" />
                    </button>
                    <DeleteIdeaModal idea={props.idea} deleteIdea={props.deleteIdea} />
                </span>
*/
