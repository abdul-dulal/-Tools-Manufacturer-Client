import React from "react";

const About = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 px-12 my-8 ">
      <div class=" max-w-lg bg-base-100 shadow-xl">
        <div class="">
          <h2 class="card-title ml-5">
            React Application performance imporve tips
          </h2>
          <p className="ml-5">
            There are many ways to improve performance . I will discuss pro tips
            improve React application perfermance
          </p>
          <div className="text-[18px] ml-5  ">
            <li>Memoize React Components</li>
            <li> Using Immutable Data Structures</li>
            <li> Function/Stateless Components and React.PureComponent</li>
            <li>Multiple Chunk Files</li>
            <li>
              {" "}
              Use React.Fragments to Avoid Additional HTML Element Wrappers
            </li>
            <li>Dependency optimization</li>
            <li>9. Avoid using Index as Key for map</li>
            <li>Avoiding Props in Initial States</li>
            <li>Spreading props on DOM elements</li>
            <li>Spreading props on DOM elements</li>
            <li>Avoid Async Initialization in</li>
            <li>Using a CDN</li>
            <li>Consider Server-side Rendering</li>
          </div>
        </div>
      </div>

      <div className=" max-w-lg bg-base-100 shadow-xl">
        <div class="">
          <h2 class=" card-title py-3 ml-5">
            different ways to manage a state in a React application
          </h2>
          <p className="ml-5">The Four Kinds of React State to Manage</p>
          <p className="ml-5">
            There are four main types of state need to properly manage React
            apps:
          </p>
          <div className="text-[18px] ml-5 ">
            <li>Local state</li>
            <li> Global state</li>
            <li> Server state</li>
            <li>URL state</li>
            <p className="ml-5">
              <span className="font-bold">Local (UI) state :</span>
              Local state is most often managed in React using the useState
              hook.For example, local state would be needed to show or hide a
              modal component or to track values for a form component,
            </p>
            <p>
              <span className="font-bold"> Global (UI) state:</span> Global
              state is necessary when we want to get and update data anywhere in
              our app, or in multiple components at least.A common example of
              global state is authenticated user state. If a user is logged into
              our app
            </p>
            <p>
              <span className="font-bold"> Server state:</span>
              Data that comes from an external server that must be integrated
              with our UI state.Server state is a simple concept, but can be
              hard to manage alongside all of our local and global UI state.
            </p>
            <p>
              <span className="font-bold"> URL state:</span>
              Data that exists on our URLs, including the pathname and query
              parameters.URL state is often missing as a category of state, but
              it is an important one. In many cases
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg bg-base-100 shadow-xl ">
        <div className="card-title ml-5 ">
          prototypical Inheritance in javaScript
        </div>
        <p className="ml-5">
          JavaScript is a prototype-based, Object Oriented programming language.
          After the ES6 updates, JavaScript allowed for “prototypal
          inheritance”, meaning that objects and methods can be shared,
          extended, and copied. Sharing amid objects makes for easy inheritance
          of structure (data fields), behavior (functions / methods), and state
          (data values). JavaScript is the most common of the prototype-capable
          languages, and its capabilities are relatively unique. When used
          appropriately, prototypical inheritance in JavaScript is a powerful
          tool that can save hours of coding. Today, we want to get you
          acquainted with prototypal inheritance in JavaScript to get you up to
          date with the ES6 capabilities. Prototypical inheritance allows us to
          reuse the properties or methods from one JavaScript object to another
          through a reference pointer function. All JavaScript objects inherit
          properties and methods from a prototype: Date objects inherit from
          Date
        </p>
      </div>
      <div className="max-w-lg bg-base-100 shadow-xl">
        <div className="ml-5 my-10">
          <h1 className="card-title"> Reasons to use useState</h1>
          <p>
            The useState is a Hook that allows you to have state variables in
            functional components. React has two types of components, one is
            class components which are ES6 classes that extend from React and
            the other is functional components. Class components a Component and
            can have state and lifecycle methods: class Message extends React.
            The useState hook is a special function that takes the initial state
            as an argument and returns an array of two entries. We can also pass
            a function as an argument if the initial state has to be computed.
            And the value returned by the function will be used as the initial
            state.
          </p>
        </div>
      </div>
      <div className="max-w-lg bg-base-100 shadow-xl">
        <div className="ml-5 my-10">
          <h1 className="card-title">
            What is a unit test? Why should write unit tests?
          </h1>
          <p>
            <span className="font-bold">unit test : </span>Unit testing, a
            testing technique using which individual modules are tested to
            determine if there are any issues by the developer himself. It is
            concerned with functional correctness of the standalone modules. The
            main aim is to isolate each unit of the system to identify, analyze
            and fix the defects.
          </p>
          <p>
            <span className="font-bold">Unit Testing Needs:</span>
            <li>
              Reduces Defects in the Newly developed features or reduces bugs
              when changing the existing functionality.
            </li>
            <li>
              Reduces Cost of Testing as defects are captured in very early
              phase.
            </li>
            <li>Improves design and allows better refactoring of code.</li>
            <li>
              Unit Tests, when integrated with build gives the quality of the
              build as well.
            </li>
            <li>
              <span className="font-bold">Gray Box Testing </span>Used to
              execute tests, risks and assessment methods.
            </li>
          </p>
          <p>
            <span className="font-bold">Unit Testing Techniques:</span>
            <li>
              {" "}
              <span className="font-bold">Black Box Testing -</span> Using which
              the user interface, input and output are tested.
            </li>
            <li>
              <span className="font-bold">White Box Testing </span> used to test
              each one of those functions behaviour is tested.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
