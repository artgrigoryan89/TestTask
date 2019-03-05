import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import InputComponent from "./InputComponent";
import CheckBoxGroup from "./CheckBoxGroup";

import { getData, selectedCheckBox } from "../redux/actions/data-actions";


// app component
class App extends React.Component {
    // render
    render() {
        const { tree, getData, errorMessage, selectedCheckBox } = this.props;
        return (
            <div className="container">
                <InputComponent getData={ getData }/>

                {
                    !errorMessage  && tree.map( el => <CheckBoxGroup selectedCheckBox={ selectedCheckBox } key={ el.name } data={ el }/>)
                }
                { !!errorMessage && <Alert className="errorMessage" color="danger">{errorMessage}</Alert>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tree: state.data.tree,
        errorMessage: state.data.errorMessage,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getData, selectedCheckBox}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

