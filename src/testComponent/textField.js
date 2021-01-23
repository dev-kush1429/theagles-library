import React from "react";
import { Form } from "react-bootstrap";

function TextField(props) {
  const { value, setValue } = props;

  return (
    <Form
      className="d-flex align-items-center
    "
    >
      <Form.Control
        type="number"
        value={value}
        onChange={setValue}
        placeholder="value in px"
      />
      px
    </Form>
  );
}

export default TextField;
