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
                <tr>
                    <td>
                        <s>
                            <strong>
                                {this.props.idea.link ? (
                                    <a href={this.props.idea.link} className="text-gray">
                                        {this.props.idea.name}
                                    </a>
                                ) : (
                                    <span className="text-gray">{this.props.idea.name}</span>
                                )}
                            </strong>
                        </s>
                    </td>
                    <td>
                        <s className="text-gray">{this.props.idea.description}</s>
                    </td>
                    <td>
                        <small className="text-gray">
                            Acheté <b>{/*<UserContainer id={props.idea.boughtUser} />*/}</b>
                        </small>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>
                        <strong>
                            {this.props.idea.link ? <a href={this.props.idea.link}>{this.props.idea.name}</a> : <span>{this.props.idea.name}</span>}
                        </strong>
                    </td>
                    <td>{this.props.idea.description}</td>
                    <td>
                        <MarkAsBoughtModalContainer idea={this.props.idea} owner={this.props.listOwner} bought={this.bought} />
                    </td>
                </tr>
            );
        }
    }
}
