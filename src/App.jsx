import Counter from "./Counter";
import "./index.css";

// export default function App() {
//   return (
//     <div>
//       <h1>Compound Component Pattern</h1>
//       <Counter
//         iconIncrease="+"
//         iconDecrease="-"
//         label="My NOT so flexible counter"
//         hideLabel={false}
//         hideIncrease={false}
//         hideDecrease={false}
//       />
//     </div>
//   );
// }

////**************************************************** Compound Component Pattern
// let's start by understanding what the Compound Component pattern is all about. So, the idea of a Compound Component is that we can create a set of related components that together achieve a common and useful task, for example, implementing a counter, such as we are going to do in this lecture.
// But of course, this pattern can also be used in all kinds of components that are actually more useful, for example modal windows, pagination, tables, and so on.

// for example, implementing a counter But of course, this pattern can also be used in all kinds of components that are actually more useful, for example modal windows, pagination, tables, and so on.
// So basically, the way we implement this is that we create a parent component, and then a few different child components that really belong to the parent, and that really only make sense when used together with the parent component. And a good example of this is the HTML select and option elements. So the select element implements a select box
// and the option element implements each of the select options inside the select box. So we have used this kind of HTML all the time. And so these option elements can really only be used inside a select element. So they only make sense within that element.
// And so this is essentially exactly the same principle as we are going to use in compound components. And this will then allow us to implement highly flexible and highly reusable components
// with a very, very expressive API. And all without basically using no props at all.

// without the flexibility of a compound component like this one(we want to acheive below), we would have to pass in 10 or 20 props to configure it in the same way that we can easily achieve like this.
// how can this count value like here actually know what the current state is in this counter component? Because I mean, we are not passing any props between here. And so again, how will this component here know
// what the current state is? Or also, how will this component right here know how to increase the state and this one how to decrease it? Well, as we just mentioned, we cannot use props for that. But thankfully for us, we have another solution, which is to actually use context.

// export default function App() {
//   return (
//     <div>
//       <h1>Compound Component Pattern</h1>
//       <Counter
//         iconIncrease="+"
//         iconDecrease="-"
//         label="My NOT so flexible counter"
//         hideLabel={false}
//         hideIncrease={false}
//         hideDecrease={false}
//       />
//       {/* suppose we want something like this */}
//       <Counter>
//         <Counter.count />
//         <Counter.decrease />
//         <Counter.increase />
//         <Counter.label>This is the label</Counter.label>
//       </Counter>
//     </div>
//   );
// }

////*********************************************** Start implementing
// counter.jsx

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      />
      {/* suppose we want something like this */}
      <Counter>
        <Counter.Count />
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Label>My super flexible counter</Counter.Label>
      </Counter>
      <div>
        <Counter>
          <Counter.Count />
          <Counter.Decrease icon="-" />
          <Counter.Increase icon="+" />
          <div>
            <Counter.Label>My super flexible counter</Counter.Label>
          </div>
        </Counter>
      </div>
    </div>
  );
}
