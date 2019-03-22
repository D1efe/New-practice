import React from "react";
import style from "./Style.js"

import FormMessages from "./FormMessages";

/*
class NotSoSimpleForm extends React.Component {
    state = {
        messageSuffix: "",
        messageSuffixError: "",
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

export default NotSoSimpleForm*/

class NotSoSimpleForm extends React.Component {
    state = {
        messageSuffix: "",
        messageSuffixError: "",
        //two properties for state use, display error if true, leave empty if false
    };

    validateMessage = message => {
        const myExpression = /[A-Za-z]{3,}/;

        return !myExpression.test(message)
        ? "must contain no special characters and atleast 3 letters" : "This message is accepted";
        //test message against regex expression, look up .test()
        //short hand boolean outputs
    };

    onMessageSuffixBlur = () => {

        const { messageSuffix } = this.state;
        const messageSuffixError = this.validateMessage(messageSuffix);

        return this.setState({messageSuffixError});

    };

    onMessageSuffixChange = event =>
        this.setState({
            messageSuffix: event.target.value


            //executes first
        });

    render() {
        const {messageSuffixError, messageSuffix} = this.state;
        return (
            <div style={style.form}>
                <div style={style.inputGroup}>
                    <label>Message:
                    <input style={style.input}
                        type="text" name="messageSuffix" onChange={this.onMessageSuffixChange} onBlur={this.onMessageSuffixBlur}/>

                    {messageSuffixError && <div style={style.error}>{messageSuffixError}</div>}
                    {/*returns suffix error value depending on boolean (true or false)*/}

                    </label>
                </div>

                <FormMessages messageSuffix={messageSuffix} />
            </div>
        );
    }
}

/*set value of input box to user input
 onChange function executes and state is set to user input
 Event handler onBlur takes the state and assigns it to messageSuffix
 validation occurs on messageSuffix; messageSuffixError is assigned the output of the validation boolean
 Suffix error displays below input box depending on validation result
 */


export default NotSoSimpleForm