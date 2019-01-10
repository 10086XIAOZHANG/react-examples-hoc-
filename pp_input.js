import React from "react";
import ReactDOM from "react-dom";

// Props Proxy demonstration

function PPHOC(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
      this.onNameChange = this.onNameChange.bind(this);
    }
    onNameChange(event) {
      debugger;
      this.setState({
        name: event.target.value
      });
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}

class Example extends React.Component {
  render() {
    return (
      <div>
        输入框:
        <input name="name" {...this.props.name} />
        <p>打印的value:{this.props.name.value}</p>
      </div>
    );
  }
}

const EnhancedExample = PPHOC(Example);

ReactDOM.render(<EnhancedExample />, document.getElementById("root"));
