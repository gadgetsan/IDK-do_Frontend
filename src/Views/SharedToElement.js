import React, { Component } from "react";
import DeleteShareModalContainer from "../Containers/DeleteShareModal";

export default function SharedToElement(props) {
    return (
        <li>
            {props.share.toEmail}
            <DeleteShareModalContainer share={props.share} deleteShare={props.deleteShare} />
        </li>
    );
}
