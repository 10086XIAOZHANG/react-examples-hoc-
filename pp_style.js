import React from "react";
import ReactDOM from "react-dom";

// Props Proxy demonstration

function PPHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return (
        <div style={{ display: "block", color: "#f2c" }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
class Example extends React.Component {
  render() {
    return <div>改变组件样式</div>;
  }
}

const EnhancedExample = PPHOC(Example);

ReactDOM.render(<EnhancedExample />, document.getElementById("root"));
