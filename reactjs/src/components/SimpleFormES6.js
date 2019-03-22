import React from "react";
import FormMessages from "./FormMessages";

/*
very very very basic form with no user input

const SimpleFormES6 = () => (

            <div>
                <input type="text" name="myName"/>
                <FormMessages messageSuffix="Check me out"/>
            </div>
        );
 */

class SimpleFormES6 extends React.Component {
    state = {
        messageSuffix: "",
    };

    onMessageSuffixChange = event =>
        this.setState({
            messageSuffix: event.target.value
        });

    render() {
        return (
            <div>
                <input type="text" name="firstName" onChange={this.onMessageSuffixChange} />

                <FormMessages messageSuffix={this.state.messageSuffix} />
            </div>
        );
    }
}

export default SimpleFormES6

