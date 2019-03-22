import React from "react";
import InitialMessageEC6 from './InitialMessageEC6'

const SimpleForm = () => (
            <div>
                <input type="text" name="myName
                " />
                <InitialMessageEC6 myName="Efe" />
            </div>
        );

const App = () => (
    <div>
        <SimpleForm />
    </div>
);