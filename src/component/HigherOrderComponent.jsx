import React from "react";

function HigherOrderComponent() {
    return (
        <>
            <h1>This is the Higher Order Component</h1> <br />
            <ChildComponent name={"statement of child component which invocing inside the HOC"} />
        </>
    );
}
export default HigherOrderComponent;

const ChildComponent = (props) => {
    return (
        <>
            <div className="bg-info">{props.name}</div>
        </>
    );
};