import React from "react";
import UserDetail from "./UserDetail";
import {detailsRecords} from "./DataSources";

class UserDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        let {id} = this.props.params;

        console.log(id);
        if (id) {
            this.setState({
                details: detailsRecords.filter((record) => {
                    return record.id == id;
                })
            })
        } else {
            this.setState({
                    details: detailsRecords
                }
            );
        }
    }

    render() {
        return (
            <div>
                {this.props.params.id && <h1>ID: {this.props.params.id}</h1>}
                {this.state.details.map((detail, index) => {
                    return <UserDetail key={index}
                                       detail={detail}/>
                })}
            </div>
        )
    }
}

export default UserDetails;