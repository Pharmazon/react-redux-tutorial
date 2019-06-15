import React from 'react';

class GridRecord extends React.Component {

    handleLastNameChange(e) {
        this.props.updateLastName(e.target.value);
    }

    render() {
        let {record} = this.props;
        return (
            <tr>
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