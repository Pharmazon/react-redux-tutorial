import React from 'react';
import GridRecord from "./GridRecord";

const dataSource = [
    {firstName: "John", lastName: "Doe", active: false},
    {firstName: "Mary", lastName: "Moe", active: false},
    {firstName: "Peter", lastName: "Noname", active: true}
];

class GridComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        this.setState({
            records: dataSource
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
                    <input type="text" placeholder="Filter by..."/>
                </p>
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>{records}</tbody>
                </table>
            </div>
        )
    }
}

export default GridComponent;