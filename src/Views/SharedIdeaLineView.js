import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";
import MarkAsBoughtModalContainer from "../Containers/MarkAsBoughtModalContainer";
import CancelBoughtModalContainer from "../Containers/CancelBoughtModalContainer";
import UserContainer from "../Containers/UserContainer";

export default class SharedIdeaLineView extends Component {
    constructor(props) {
        super(props);

        this.bought = this.bought.bind(this);
        this.cancelBought = this.cancelBought.bind(this);
        this.state = {
            boughtOn: props.idea.boughtOn,
            boughtUser: props.idea.boughtUser
        };
    }

    bought(newIdea) {
        //console.log("BOUGHT");
        //console.log(newIdea);
        this.setState({
            boughtOn: newIdea.boughtOn,
            boughtUser: newIdea.boughtUser
        });
    }

    cancelBought(newIdea) {
        //console.log("BOUGHT CANCELLED");
        //console.log(newIdea);
        this.setState({
            boughtOn: newIdea.boughtOn,
            boughtUser: newIdea.boughtUser
        });
    }

    render() {
        let user = JSON.parse(localStorage.getItem("user"));
        if (this.state.boughtOn) {
            return (
                <tr className="list-line">
                    <td className="list-item">
                        <div className="list-item-container bought">
                            <span className="list-item-title">
                                {this.props.idea.link ? (
                                    <a href={this.props.idea.link} target="_blank">
                                        {this.props.idea.name}
                                    </a>
                                ) : (
                                    <span>{this.props.idea.name}</span>
                                )}
                            </span>
                            {this.props.idea.description ? " - " : ""}
                            <small>{this.props.idea.description}</small>
                            <div className="list-actionBox">
                                <a>Acheté</a>{" "}
                                {this.state.boughtUser == user.rowid ? (
                                    <CancelBoughtModalContainer idea={this.props.idea} owner={this.props.listOwner} cancelBought={this.cancelBought} />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr className="list-line">
                    <td className="list-item">
                        <div className="list-item-container">
                            <span className="list-item-title">
                                {this.props.idea.link ? (
                                    <a href={this.props.idea.link} target="_blank">
                                        {this.props.idea.name}
                                    </a>
                                ) : (
                                    <span>{this.props.idea.name}</span>
                                )}
                            </span>
                            {this.props.idea.description ? " - " : ""}
                            <small>{this.props.idea.description}</small>
                            <div className="list-actionBox">
                                <MarkAsBoughtModalContainer idea={this.props.idea} owner={this.props.listOwner} bought={this.bought} />
                            </div>
                        </div>
                    </td>
                </tr>
            );
        }
    }
}
