import { Component } from "react";

export class Filter extends Component {
    handleInputValue = ({target}) => {
        this.props.handleFilter(target.value)
    }

    render() {
        return (
            <>
                <p>Find contact by name</p>
                <input onChange={this.handleInputValue} value={this.props.value} />
            </>
        );
    }
}