import React from 'react';
import {Label, CustomInput } from 'reactstrap';

class CheckBox extends React.Component {

    handleInputChange = (event) => {
        const {
            selectedCheckBox,
        } = this.props;

        if (typeof selectedCheckBox === 'function') {
            const data = { id: event.target.id, value: event.target.checked };
            selectedCheckBox(data);
        }
    }

    render() {
        const {
            data
        } = this.props;

        return (
            <Label className="checkBoxLabel">
                <CustomInput  type="checkbox" id={ data.id } checked={ data.value } onChange={ this.handleInputChange } />
                { data.name }
            </Label>
        );
    }
}

export default CheckBox;

