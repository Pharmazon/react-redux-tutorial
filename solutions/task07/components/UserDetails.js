import React from "react";
import UserDetail from "./UserDetail";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

UserDetail.propTypes = {
    details: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        details: state.details
    }
}

class UserDetails extends React.Component {

    componentDidMount(){
        let {dispatch} = this.props;
        dispatch({
            type:"FILTER_DETAILS",
            value:this.props.params.id
        });
    }

    componentDidUpdate(prevProps){
        let {dispatch} = this.props;
        if (prevProps.params.id !== this.props.params.id) {
            dispatch({
                type:"FILTER_DETAILS",
                value:this.props.params.id
            })
        }
    }


    render() {
        return (
            <div>
                <h1>ID: {this.props.params.id}</h1>
                {
                    this.props.details.map((detail, index) => {
                    return <UserDetail key={index}
                                       detail={detail}/>
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(UserDetails)
