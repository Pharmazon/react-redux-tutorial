import React from 'react';
import {hashHistory} from "react-router";

class GridRecord extends React.Component {

    showUserDetails(e) {
        e.preventDefault();
        hashHistory.push(`/details/${this.props.record.id}`);
    }

    handleLastNameChange(e) {
        this.props.updateLastName(e.target.value);
    }

    render() {
        let {record} = this.props;

        return (
            <tr>
                <th onClick={this.showUserDetails.bind(this)}>
                    <a href="#">{record.id}</a>
                </th>
                <th>{record.firstName}</th>
                <th>
                    <input type="text"
                           value={record.lastName}
                           onChange={this.handleLastNameChange.bind(this)}/>
                </th>
                <th>
                    <input type="checkbox"
                           checked={record.active}
                           onChange={this.props.toggleActive}/>
                </th>
            </tr>
        )
    }
}

export default GridRecord;
