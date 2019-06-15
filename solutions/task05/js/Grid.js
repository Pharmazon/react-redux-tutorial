import React from 'react';

import GridRecord from "./GridRecord";
import PropTypes from 'prop-types';
import {tableRecords} from './DataSources';

GridRecord.defaultProps = {
    record: {
        firstName: "N/A",
        lastName: "N/A",
        active: false
    }
};

GridRecord.propTypes = {
    record: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    })
};

class Grid extends React.Component {

    constructor() {
        super();
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
        this.setState({
            records: tableRecords
        })
    }

    toggleActive(index) {
        let {records} = this.state;
        records[index].active = !records[index].active;
        this.setState({
            records: records
        })
    }

    updateLastName(index, newValue) {
        let {records} = this.state;
        records[index].lastName = newValue;
        this.setState({
            records: records
        })
    }

    handleFilterChange(e){
        let value = e.target.value,
            records = tableRecords.filter((record) =>
                record.firstName.toUpperCase().includes(value.toUpperCase())
            );
        this.setState({
            records:records
        });
    }

    render() {
        let records = this.state.records.map((record, index) => {
            return <GridRecord
                record={record}
                key={index}
                toggleActive={this.toggleActive.bind(this, index)}
                updateLastName={this.updateLastName.bind(this, index)}/>
        });

        return (
            <div style={{width:300, height: 300, padding: 20}}>
                <p>
                    <input type="text"
                           ref="filterInput"
                           placeholder="Filter by..."
                           onChange={this.handleFilterChange.bind(this)}/>
                </p>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>{records}</tbody>
                </table>
                <div>{
                    this.props.children &&
                    React.cloneElement(this.props.children, { records: this.state.records })
                }
                </div>
            </div>
        )
    }
}

export default Grid;