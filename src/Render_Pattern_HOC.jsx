import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./style.css";
import withToggles from "./HOC";

// const products = Array.from({ length: 20 }, () => {
//   return {
//     productName: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     price: faker.commerce.price(),
//   };
// });

// const companies = Array.from({ length: 15 }, () => {
//   return {
//     companyName: faker.company.name(),
//     phrase: faker.company.catchPhrase(),
//   };
// });

// function ProductItem({ product })
//   return (
//     <li className="product">
//       <p className="product-name">{product.productName}</p>
//       <p className="product-price">${product.price}</p>
//       <p className="product-description">{product.description}</p>
//     </li>
//   );
// }

// function CompanyItem({ company, defaultVisibility }) {
//   const [isVisible, setIsVisisble] = useState(defaultVisibility);

//   return (
//     <li
//       className="company"
//       onMouseEnter={() => setIsVisisble(true)}
//       onMouseLeave={() => setIsVisisble(false)}
//     >
//       <p className="company-name">{company.companyName}</p>
//       {isVisible && (
//         <p className="company-phrase">
//           <strong>About:</strong> {company.phrase}
//         </p>
//       )}
//     </li>
//   );
// }

// function List({ title, items }) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const displayItems = isCollapsed ? items.slice(0, 3) : items;

//   function toggleOpen() {
//     setIsOpen((isOpen) => !isOpen);
//     setIsCollapsed(false);
//   }

//   return (
//     <div className="list-container">
//       <div className="heading">
//         <h2>{title}</h2>
//         <button onClick={toggleOpen}>
//           {isOpen ? <span>&or;</span> : <span>&and;</span>}
//         </button>
//       </div>
//       {isOpen && (
//         <ul className="list">
//           {displayItems.map((product) => (
//             <ProductItem key={product.productName} product={product} />
//           ))}
//         </ul>
//       )}

//       <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
//         {isCollapsed ? `Show all ${items.length}` : "Show less"}
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Render Props Demo</h1>

//       <div className="col-2">
//         <List title="Products" items={products} />
//       </div>
//     </div>
//   );
// }

// // LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
// function ProductList({ title, items }) {
//   return (
//     <ul className="list">
//       {items.map((product) => (
//         <ProductItem key={product.productName} product={product} />
//       ))}
//     </ul>
//   );
// }

////*****************************************************************  The Render Props Pattern
// let's use the render props pattern to solve the problem that we identified earlier. So the render prop pattern is all about passing in a prop called render, which is a function that a component uses to know what it should render and how to do it. So essentially, whenever you can't directly pass in JSX with the children prop
// because you need to give the component a description on how to render something, then you need to reach for this render props pattern.
// So essentially we achieved our goal of reusing all of this (indistinct) logic and also the UI itself. So basically this title here, this button that we have and yeah, also that other button down there. So we were able to share all of that among these two lists here, simply by passing in the render prop again. And so therefore, with this, this list no longer cares about what it is rendering and simply follows the instructions right here.
// And so those instructions in this case are simply what should happen for each of the items in the company's array.

// const products = Array.from({ length: 20 }, () => {
//   return {
//     productName: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     price: faker.commerce.price(),
//   };
// });

// const companies = Array.from({ length: 15 }, () => {
//   return {
//     companyName: faker.company.name(),
//     phrase: faker.company.catchPhrase(),
//   };
// });

// function ProductItem({ product }) {
//   return (
//     <li className="product">
//       <p className="product-name">{product.productName}</p>
//       <p className="product-price">${product.price}</p>
//       <p className="product-description">{product.description}</p>
//     </li>
//   );
// }

// function CompanyItem({ company, defaultVisibility }) {
//   const [isVisible, setIsVisisble] = useState(defaultVisibility);

//   return (
//     <li
//       className="company"
//       onMouseEnter={() => setIsVisisble(true)}
//       onMouseLeave={() => setIsVisisble(false)}
//     >
//       <p className="company-name">{company.companyName}</p>
//       {isVisible && (
//         <p className="company-phrase">
//           <strong>About:</strong> {company.phrase}
//         </p>
//       )}
//     </li>
//   );
// }

// function List({ title, items, render }) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const displayItems = isCollapsed ? items.slice(0, 3) : items;

//   function toggleOpen() {
//     setIsOpen((isOpen) => !isOpen);
//     setIsCollapsed(false);
//   }

//   return (
//     <div className="list-container">
//       <div className="heading">
//         <h2>{title}</h2>
//         <button onClick={toggleOpen}>
//           {isOpen ? <span>&or;</span> : <span>&and;</span>}
//         </button>
//       </div>
//       {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

//       <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
//         {isCollapsed ? `Show all ${items.length}` : "Show less"}
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Render Props Demo</h1>

//       <div className="col-2">
//         <List
//           title="Products"
//           items={products}
//           render={(product) => (
//             <ProductItem key={product.productName} product={product} />
//           )}
//         />
//         {/* for company */}
//         <List
//           title="Companies"
//           items={companies}
//           render={(company) => (
//             <CompanyItem
//               key={company.companyName}
//               company={company}
//               defaultVisibility={false}
//             />
//           )}
//         />
//       </div>
//     </div>
//   );
// }

// // LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
// function ProductList({ title, items }) {
//   return (
//     <ul className="list">
//       {items.map((product) => (
//         <ProductItem key={product.productName} product={product} />
//       ))}
//     </ul>
//   );
// }

////************************************************************  A Look at Higher-Order Components (HOC)
// Now, this one isn't super important, which is why I didn't even include it in the first lecture of the section, but I still need you to know about it. And so let's now take a look at the Higher Order Component Pattern. So basically we want to do now something similar to what we just did with the Render Props but with the Higher Order Component Pattern.
// Now, I would actually say that almost no one still writes Higher Order Components by hand, but I'm still gonna show you this because some libraries, do actually expose Higher Order Components, and then it's gonna be very useful to know what they are. So you don't need to know how to write them
// I will just quickly show you a Higher Order Component, what it is, and how it works and also why it would be used.

// So, let's imagine that we got this component right here. So this product list from a third party library and that we cannot change it. So we just got this here and we now still want to add these two toggle functionalities. So, this one right here and also this one but we cannot change this product list component. So how could we do that? Well, one way would be to write a Higher Order Component
// to basically enhance or improve this component right here. So, a Higher Order Component is simply a component that takes in another component and then returns a new component that is better, so an enhanced version of the initial component.

// HOC.jsx

// So it's then returned here, together with a bunch of other stuff. And now we can use this Higher Order Component, right here.

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
        {isCollapsed ? `Show all ${items.length}` : "Show less"}
      </button>
    </div>
  );
}

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
function ProductList({ title, items }) {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}

const ProductListWithToggles = withToggles(ProductList); // will return a component we are storing that in ProductListWithToggles

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      {/* <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
        
        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div> */}
      <div className="col-2">
        {/* this first one will not have toggle button */}
        <ProductList title="Hoc component" items={products} />
        <ProductListWithToggles title="Hoc component" items={products} />
      </div>
    </div>
  );
}

// // LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
// function ProductList({ title, items }) {
//   return (
//     <ul className="list">
//       {items.map((product) => (
//         <ProductItem key={product.productName} product={product} />
//       ))}
//     </ul>
//   );
// }
