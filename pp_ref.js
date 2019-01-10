import React from "react";
import ReactDOM from "react-dom";

// Props Proxy with ref demonstration

function PPHOC(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "" };

      this.updateRealeseName = this.updateRealeseName.bind(this);
    }

    updateRealeseName(instance) {
      debugger;
      instance.instanceFunc();
      if (instance.realeseName !== this.state.name)
        this.setState({ name: instance.realeseName });
    }
    render() {
      //当 WrappedComponent 被渲染后，ref 上的回调函数 proc 将会执行，
      //此时就有了这个 WrappedComponent 的实例的引用。这个可以用来『读取，添加』实例的 props 或用来执行实例方法。
      const props = Object.assign({}, this.props, {
        ref: this.updateRealeseName
      });
      return (
        <div>
          <h2>HOC Component</h2>
          <p>
            The HOC component gets `instanceName` from the WrappedComponent
            instance via <br />
            `refs` and saves it in it's own state:
          </p>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.instanceName = "han solo";
    this.realeseName = "小组天";
  }
  instanceFunc() {
    console.log("this.instanceFunc");
  }
  render() {
    return (
      <div>
        <h2>Wrapped Component</h2>
        <p>Props</p>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const EnhancedExample = PPHOC(Example);

ReactDOM.render(
  <EnhancedExample date={new Date().toISOString()} />,
  document.getElementById("root")
);
