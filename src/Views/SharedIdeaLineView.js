import React, { Component } from "react";
import DeleteIdeaModal from "../Containers/DeleteIdeaModal";
import MarkAsBoughtModalContainer from "../Containers/MarkAsBoughtModalContainer";
import UserContainer from "../Containers/UserContainer";

export default class SharedIdeaLineView extends Component {
    constructor(props) {
        super(props);

        this.bought = this.bought.bind(this);
        this.state = {
            forceBought: false
        };
    }

    bought() {
        //console.log("BOUGHT");
        this.setState({ forceBought: true });
    }

    render() {
        if (this.props.idea.boughtOn || this.state.forceBought) {
            return (
                <tr className="list-line">
                    <td className="list-item">
                        <div className="list-item-container bought">
                            <span className="list-item-title">
                                {this.props.idea.link ? <a href={this.props.idea.link}>{this.props.idea.name}</a> : <span>{this.props.idea.name}</span>}
                            </span>
                            {this.props.idea.description ? " - " : ""}
                            <small>{this.props.idea.description}</small>
                            <div className="list-actionBox">
                                <a href="#">Acheté</a>
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
                                {this.props.idea.link ? <a href={this.props.idea.link}>{this.props.idea.name}</a> : <span>{this.props.idea.name}</span>}
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
