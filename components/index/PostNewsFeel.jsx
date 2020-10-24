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
        <Card className="news-feel round white round-large">
            <Row>
                <Col className="news-feel__col">
                    <Input
                        className="news-feel__input block round-large"
                        name="content"
                        placeholder={`User, What are you thinking?`}
                        value={content}
                        onChange={onHandleChange}
                    />
                </Col>
                <hr className="opacity" style={{ width: '97%' }} />
                <Col className="news-feel__col">
                    <Button className="btn-dark-teal round-large"
                        onClick={onHandleSubmit}>
                        <i className="fa fa-pencil" /> Post
                    </Button>
                </Col>
            </Row>
        </Card >
    );
}

export default PostNewsFeel;

