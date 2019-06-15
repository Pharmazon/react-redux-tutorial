import React from 'react';
import {connect} from 'react-redux';

import GridRecord from "./GridRecord";
import PropTypes from "prop-types";
import {filterGrid, toggleActive, loadDataInGrid} from '../actions';

GridRecord.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false}
};

GridRecord.propTypes = {
    records: PropTypes.array.isRequired,
    filtered: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        records: state.grid.records,
        filtered: state.grid.filtered,
        loading: state.grid.loading
    }
}

class Grid extends React.Component {

    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
        this.loadData();
    }

    loadData() {
        let {dispatch} = this.props;
        dispatch(loadDataInGrid());
    }

    toggleActive(index) {
        let {dispatch} = this.props;
        dispatch(toggleActive(index));
    }

    updateLastName(index, newValue) {
        let {records} = this.props;
        records[index].lastName = newValue;
    }

    handleFilterChange(e){
        let {dispatch} = this.props;
        dispatch(filterGrid(e.target.value));
    }

    render() {
        let recordsToShow = this.props.records.filter((record) => {
            return this.props.filtered.indexOf(record.id) == -1;
        });

        let records = recordsToShow.map((record, index) => {
            return <GridRecord
                record={record}
                key={index}
                toggleActive={this.toggleActive.bind(this, record.id)}
                updateLastName={this.updateLastName.bind(this, index)}/>
        });

        if(this.props.loading) {
            return (
                <div style={{width:300, height: 300, padding: 20}}>Loading...</div>
            )
        } else {
            return (
                <div style={{width: 300, height: 300, padding: 20}}>
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
                        React.cloneElement(this.props.children, {
                            records: this.props.records
                        })
                    }
                    </div>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps)(Grid)