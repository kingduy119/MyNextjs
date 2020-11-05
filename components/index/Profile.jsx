import React from "react";
import { Container, Card } from "../common";

const Profile = (props) => {
    let { user } = props;
    let displayName = (user && user.displayName) ? user.displayName : 'New Member';
    let avatarUrl = (user && user.avatarUrl) ? user.avatarUrl : '/assets/avatar.jpg';

    return (
        <Card className="round">
            <Container>
                <h2 className="center">{displayName}</h2>
                <p className="center">
                    <img
                        className="circle"
                        style={{ width: '106px', height: '106px' }}
                        src={avatarUrl} />
                </p>
                <hr />
                <p><i className="profile-icon fa fa-pencil fa-fw icon_l1 font-medium" /> career</p>
                <p><i className="profile-icon fa fa-home fa-fw icon_l1 font-medium" /> country</p>
                <p><i className="profile-icon fa fa-birthday-cake fa-fw icon_l1 font-medium" /> birthday</p>
            </Container>
        </Card>
    );
}


export default Profile;

