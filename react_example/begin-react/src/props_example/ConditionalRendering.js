import { React } from "react";

function ConditionalRendering(props) {
    const text = props.value;
    const isShow = props.isSpecial;

    // isShow = true > value 랜더링, false > null
    // return <div>{isShow ? text : null}</div>
    return <div>{isShow && text}</div>
} export default ConditionalRendering;