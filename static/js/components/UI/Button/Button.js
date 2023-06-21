import React from "react";
import {
    SECONDARY_BUTTON
} from "../../../utilities/Constants";

import classes from './Button.module.css';

/*

Expected Props:

type: This helps identify the theme of the button which can be primary or secondary.
label: This is the label for the button. For example, Login, Create Team etc.
onClick: This is the function which will be triggered on button click.

*/

const TextButton = (props) => {
    return ( <
        button className = {
            [classes.Button, props.type === SECONDARY_BUTTON ? classes.SecondaryButton : classes.PrimaryButton].join(' ')
        }
        onClick = {
            props.onClick
        } > {
            props.label
        } < /button>
    );
}

export default TextButton;