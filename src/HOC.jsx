import { useState } from "react";

// let's take a look at it. So, that component is this one called withToggles because it will basically add back those two toggles that they showed you earlier to our component. And that component is the wrapped component that we can pass in.
// So it's pretty common that a Higher Order Component is called something that starts with this with keyword, so that's kind of a convention, because basically it will add these toggles to the component that we pass in. And so then we have a new component with toggles, right? But anyway, as I mentioned earlier
// the Higher Order Component does return a new component. and that's exactly what we have here. So we return this new list component which has the identical logic that we had previously. What's special now about this is that, here in the middle of all this logic it does then basically contain that wrapped component, so the component that we are going to pass in. Then here all the props are going to be spread,
// so basically to get them from the component that we pass in right here. So this is a pretty common pattern and then here we just have this items props with these display items that are computed up here. So again, the way in which we write a Higher Order Component is not that important.
// What matters is that it's usually called something that starts with, with and that it takes in one component and returns a new one. And the new one adds some functionality to that passing component.
// App.jsx

export default function withToggles(WrappedComponent) {
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;

    function toggleOpen() {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    }

    return (
      <div className="list-container">
        <div className="heading">
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>
            {isOpen ? <span>&or;</span> : <span>&and;</span>}
          </button>
        </div>
        {isOpen && <WrappedComponent {...props} items={displayItems} />}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
          {isCollapsed ? `Show all ${props.items.length}` : "Show less"}
        </button>
      </div>
    );
  };
}
