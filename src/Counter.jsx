import { createContext, useContext, useState } from "react";

// We are going to use context to implement the compound component pattern. And so this is a really great use case for the context API. Maybe if you ask me, even the greatest use case
// implement a compound component. So, the first step is to indeed create a context. Then next up, we create the parent component. So create the parent component, then afterwards, we need to create the child components that will help implementing
// the common task of this overall compound component. So basically, those are going to be the decrease, count, increase, and label components. And so then afterwards in the end we add the child components as properties
// to the parent component. And this step is actually optional, but I really like to do it like this. So then we only have to export the counter, And so now the final step is actually pretty easy.
// So, we just need to place them here on the counter component. And this is possible because this is simply a function. So in JavaScript, we can add properties almost to everything.

// Step 1 create context
const CounterContext = createContext();

// Step 2 create parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }
  function decrease() {
    setCount((prev) => prev - 1);
  }

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// Step 3 create child component to help implementing common task
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// Step 4 add child component as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;

// This is how we implement a counter as a compound component.
