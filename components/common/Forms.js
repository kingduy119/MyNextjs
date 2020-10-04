import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

/**
 * Search Form
 */
function FormSearch(props) {
    return (
        <Form onSubmit={(text) => alert(text)} inline>
            <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    );
}



export { FormSearch };