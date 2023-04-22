import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertMessage(props) {
    const { variant, message, dismissible, onClose } = props;

    return (
        <Alert variant={variant} onClose={onClose} dismissible={dismissible}>
            {message}
        </Alert>

    );
}
