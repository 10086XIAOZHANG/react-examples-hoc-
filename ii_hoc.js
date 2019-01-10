import React from "react";
import ReactDOM from "react-dom";

// Props Proxy demonstration
class Example extends React.Component {
  render() {
    return <div> 改变组件样式 </div>;
  }
}
function IIHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      if (this.props.loggedIn) {
        return super.render();
      } else {
        return null;
      }
    }
  };
}
const EnhancedExample = IIHOC(Example);

ReactDOM.render(<EnhancedExample loggedIn />, document.getElementById("root"));
