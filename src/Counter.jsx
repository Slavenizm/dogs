// import { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   componentDidMount() {
//     console.log("Компонента смонтирована");
//   }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevState.count !== this.state.count) {
//   //     console.log(
//   //       Счётчик изменился: ${prevState.count} → ${this.state.count}
//   //     );
//   //   }

//     if (prevProps.step !== this.props.step) {
//       console.log("Изменился пропс step");
//     }
//   }

//   componentWillUnmount() {
//     console.log("Компонента удалена");
//   }

//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + this.props.step,
//     }));
//   };

//   decrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - this.props.step,
//     }));
//   };

//   render() {
//     console.log('render');
    
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <p>Счётчик: {this.state.count}</p>

//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

// export default Counter;