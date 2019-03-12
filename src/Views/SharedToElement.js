import React, { Component } from "react";
import DeleteShareModalContainer from "../Containers/DeleteShareModal";

export default function SharedToElement(props) {
    return (
        <tr className="list-line">
            <td className="list-item">
                <div className="list-item-container">
                    <span className="list-item-title" title={props.share.toEmail}>
                        {props.share.toEmail}
                    </span>
                    <div className="list-actionBox">
                        <DeleteShareModalContainer share={props.share} deleteShare={props.deleteShare} />
                    </div>
                </div>
            </td>
        </tr>
    );
}
