import React, { Component } from 'react';
import CheckBox from "./CheckBox";

class CheckBoxGroup extends Component {

    renderItem = (data) => {
        const { selectedCheckBox } = this.props;
        return(
            <CheckBoxGroup selectedCheckBox={ selectedCheckBox } key={ data.id } data={ data }/>
        )
    }

    render() {
        const { data, selectedCheckBox } = this.props;
        const children = data.children || [];

        return (
            <div className="checkBoxGroup">
                <CheckBox selectedCheckBox={ selectedCheckBox } data={ data }/>
                {
                    !!children.length &&

                    <div className="checkBoxCont">
                        {
                            children.map( el => { return( this.renderItem( el ) )})
                        }
                    </div>
                }
            </div>
        );
    }
}

export default CheckBoxGroup;
