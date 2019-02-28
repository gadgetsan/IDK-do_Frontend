import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";
import MarkAsBoughtModalContainer from "../Containers/MarkAsBoughtModalContainer";
import UserContainer from "../Containers/UserContainer";

export default function SharedIdeaLineView(props) {
    if (props.idea.boughtOn) {
        return (
            <tr>
                <td>
                    <s>
                        <strong>
                            {props.idea.link ? (
                                <a href={props.idea.link} className="text-gray">
                                    {props.idea.name}
                                </a>
                            ) : (
                                <span className="text-gray">{props.idea.name}</span>
                            )}
                        </strong>
                    </s>
                </td>
                <td>
                    <s className="text-gray">{props.idea.description}</s>
                </td>
                <td>
                    <small className="text-gray">
                        Acheté par{" "}
                        <b>
                            <UserContainer id={props.idea.boughtUser} />
                        </b>
                    </small>
                </td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>
                    <strong>{props.idea.link ? <a href={props.idea.link}>{props.idea.name}</a> : <span>{props.idea.name}</span>}</strong>
                </td>
                <td>{props.idea.description}</td>
                <td>
                    <MarkAsBoughtModalContainer idea={props.idea} />
                </td>
            </tr>
        );
    }
}
