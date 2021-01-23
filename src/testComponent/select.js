import React, { useState } from 'react'
import { Form, Col, } from 'react-bootstrap';
const Select = (props) => {
    const [optionState, setOptionState] = useState(props.value);
    const { options, updateData, property, keyProperty } = props;
    const onOptionChange = (referece) => {
        referece.preventDefault();
        const { value } = referece.target;
        setOptionState(value);
        updateData(property, keyProperty, value);

    }
    return (<Form>
        <Form.Row className="align-items-center">
            <Col xs="auto" className="my-1">
                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                    Preference
            </Form.Label>
                <Form.Control
                    as="select"
                    value={optionState}
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    onChange={onOptionChange}
                    custom
                >
                    {options.map(item =>
                        <option
                            key={item.label + Math.random()}
                            value={item.value}
                        >{item.label}
                        </option>)}
                </Form.Control>
            </Col>
        </Form.Row>
    </Form>)
};

export default Select;
