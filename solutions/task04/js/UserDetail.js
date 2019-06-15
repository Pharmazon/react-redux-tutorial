import React from 'react';

var user = {
    name: "Nicole Pearson",
    prof: "Web Designer / UI",
    hobbies: ["Read", "out with friends", "listen to music"],
    skills: ["html5", "css3", "react"]
};

class UserDetail extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{user.name}</h2>
                                    <p>
                                        <strong>About: </strong>
                                        {user.prof}
                                    </p>
                                    <p>
                                        <strong>Hobbies: </strong>
                                        {user.hobbies.join(', ')}
                                    </p>
                                    <p>
                                        <strong>Skills: </strong>
                                        {user.skills.map((skill, index)=>{
                                            return <span key={index}>{skill}, </span>
                                        })}
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img
                                            src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
                                            alt="" className="img-circle img-responsive"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetail;