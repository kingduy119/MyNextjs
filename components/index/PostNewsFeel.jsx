import React from "react";
import { Row, Col, Card, Button, Input } from "../common";

const PostNewsFeel = (props) => {
    let [content, setContent] = React.useState('');
    function onHandleChange(e) {
        e.preventDefault();
        setContent(e.target.value);
    }
    function onHandleSubmit(e) {
        e.preventDefault();
        props.onCreatePost({ content });
        setContent('');
    }

    return (
        <Card className="round white round-16">
            <Row className="pd-8">
                <Col className="pd-8">
                    <Input
                        className="block bor-hide round-16"
                        name="content"
                        placeholder={`User, What are you thinking?`}
                        value={content}
                        onChange={onHandleChange}
                    />
                </Col>
                <hr className="opacity" style={{ width: '97%' }} />
                <Col className="pd-s">
                    <Button className="round-16 white-darkteal"
                        onClick={onHandleSubmit}>
                        <i className="fa fa-pencil" /> Post
                    </Button>
                </Col>
            </Row>
        </Card >
    );
}

export default PostNewsFeel;

