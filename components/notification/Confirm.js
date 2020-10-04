
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert, Button } from "react-bootstrap";

function Confirm({ title, message }) {
    const [show, setShow] = useState(false);
    if (show) {
        return (
            <Alert
                variant="success"
                onClose={() => setShow(false)}
            >
                <Alert.Heading>{title}</Alert.Heading>
                <p>{message}</p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)} >Show Cofirm</Button>
}

Confirm.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};

export default Confirm;