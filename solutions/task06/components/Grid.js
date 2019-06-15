import React from 'react';
import {connect} from 'react-redux'

import GridRecord from "./GridRecord";
import PropTypes from "prop-types";

GridRecord.defaultProps = {
    record: {
        firstName: "N/A",
        lastName: "N/A",
        active: false
    }
};

GridRecord.propTypes = {
    records: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        records: state.grid
    }
}

class Grid extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
    }

    toggleActive(index) {
        let {dispatch} = this.props;
        dispatch({
            type: "TOGGLE_ACTIVE",
            value: index
        });
    }

    updateLastName(index, newValue) {
        let {records} = this.priops;
        records[index].lastName = newValue;
    }

    handleFilterChange(e) {
        let {dispatch} = this.props;
        dispatch({
            type: "FILTER",
            value: e.target.value
        });
    }

    render() {
        let records = this.props.records.map((record, index) => {
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
                    React.cloneElement(this.props.children, { records: this.props.records })
                }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Grid)