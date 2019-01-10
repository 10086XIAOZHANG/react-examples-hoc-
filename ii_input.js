import React from "react";
import ReactDOM from "react-dom";

// Props Proxy demonstration
class Example extends React.Component {
  render() {
    return <input value="原始 input value " />;
  }
}
function IIHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};
      if (elementsTree && elementsTree.type === "input") {
        newProps = { value: "更改 input value" };
      }
      const props = Object.assign({}, elementsTree.props, newProps);
      const newElementsTree = React.cloneElement(
        elementsTree,
        props,
        elementsTree.props.children
      );
      return newElementsTree;
    }
  };
}
const EnhancedExample = IIHOC(Example);

ReactDOM.render(<EnhancedExample loggedIn />, document.getElementById("root"));
