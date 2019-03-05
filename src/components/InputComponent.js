import React from "react";
import { Input, Button } from 'reactstrap';

const inputDefValue = `[{"name":"one","children":[{"name":"one-a"},{"name":"one-b","children":[{"name":"one-b-a"}]}]},{"name":"two","children":[{"name":"two-a","children":[{"name":"two-a-a"}]}]}]`

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: inputDefValue,
        }
    }

    handleInputChange = (event) => {
        this.setState({data: event.target.value} )
    }

    handleButtonClick = () =>  {
        const { data } = this.state;
        this.props.getData(data);
    }

    render() {
        return(
            <div>
                <Input className="dataInput"  type='text' defaultValue={inputDefValue} onChange={ this.handleInputChange }/>
                <Button className="inputButton" onClick={ this.handleButtonClick }>Convert Data</Button>
            </div>
        )
    }
}

