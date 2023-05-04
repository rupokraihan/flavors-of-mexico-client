import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const blogRef = useRef();

  return (
    <>
      

      <div ref={blogRef} className="my-container">
        <div className="bg-blue-100  p-6 rounded-xl mb-8">
          <h1 className="text-3xl font-bold mb-4">
            1.What is the differences between uncontrolled and controlled
            components?
          </h1>
          <p className="text-xl font-medium">
            Answer: React is one of the most favored languages when it comes to
            the development of User Interfaces, as it uses the concept of
            components. Consequently, there will be many times when you will
            deal with forms in react. There are two options in that case, and
            use controlled or uncontrolled components. We must have seen some
            warnings when using uncontrolled components and have to shift to
            controlled ones.
            <br /> <br />
            Controlled components: A component in react is referred to as
            controlled when we let react control the component for us. It means
            that the component controls the input form, and all of its changes
            are completely driven by event handlers like setState(). Also, the
            component controls the render and keeps the data of form in the
            component state. <br />
            Practically, when you are building a form dealing with user input,
            there will be HTML elements like textarea, select, and input.
            Instead of the DOM handling these fields, the form input is handled
            by the component in react. An internal state is maintained by these
            HTML elements and keeps on updating as the user changes the input.
            In accordance with that, the component that is wrapping the form
            will keep the mutable form data in its state and handles all the
            changes using the onChange method, which calls the setState()
            method.
            <br />
            The state of a controlled component is passed down from its parent
            component as props and is updated through callbacks provided by the
            parent component. <br />
            <br />
            Uncontrolled components: Uncontrolled components must be clear that
            the uncontrolled component react does not use state. Thus
            uncontrolled components do not depend on any state of input elements
            or any event handler. This type of component does not care about
            real-time input changes. <br />
            Uncontrolled components manage their own state internally and do not
            rely on the parent component to provide or manage the state.The
            state of an uncontrolled component is typically managed through the
            DOM, meaning that it is often managed using refs or other DOM APIs.
            Refs in react environment work like a pointer that provides us
            access to the DOM nodes. We can say that an uncontrolled component
            is one that is closer to the actual vanilla JS (a low-level
            component). <br />
            Uncontrolled components does not allow validation control.It stores
            the current value using react ref and limited control over the form
            data.ot predictable because form elements can lose their reference
            or may be changed/ affected by external sources during the lifecycle
            of components. <br />
            In general, controlled components are often preferred in React
            because they provide a more predictable and maintainable approach to
            managing state. However, uncontrolled components can still be useful
            in certain situations, such as when working with third-party
            libraries or when managing complex, non-React state.
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl mb-8">
          <h1 className="text-3xl font-bold mb-4">
            2.How to validate React props using PropTypes?
          </h1>
          <p className="text-xl font-medium">
            Answer: React provides a built-in utility called PropTypes for
            validating the props passed to a component. PropTypes allows you to
            define the expected types and shapes of the props that are passed to
            a component, and will throw a warning in the console if the props
            passed do not match the expected types and shapes. <br />A parent
            component passes props down to child components. And child
            components receive them. We can pass any data as props. Therefore,
            we need a way to validate their data type so that the child
            component gets what they expect.
            <br />
            PropTypes are simply a mechanism that ensures that the passed value
            is of the correct datatype. This makes sure that we don’t receive an
            error at the very end of our app by the console which might not be
            easy to deal with.There are many different types of PropTypes and
            all of them have their unique ES6 classes which we can use. <br />
            We can do so by running the following command in our terminal. (npm
            install prop-types --save). <br />
            We can use PropTypes to validate any data we are receiving from
            props. But before using it we will have to import it as always in
            our app.(import PropTypes from 'prop-types';) <br />
            Note that PropTypes are only available in development mode, so it's
            important to ensure that are not relying on them in production
            code.If a prop doesn't match the expected type, a warning will be
            logged in the console.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl mb-8">
          <h1 className="text-3xl font-bold mb-4">
            3.What is the difference between nodejs and express js?
          </h1>
          <p className="text-xl font-medium">
            Answer: Node.js and Express.js are both technologies used in
            building web applications with JavaScript. Node.js is a runtime
            environment that allows developers to run JavaScript on the
            server-side, while Express.js is a framework built on top of Node.js
            that simplifies the process of building web applications. <br />{" "}
            <br />
            Node.js: Node.js is an open source and cross-platform runtime
            environment for executing JavaScript code outside of a browser. Need
            to remember that NodeJS is not a framework and it’s not a
            programming language. Most of the people are confused and understand
            it’s a framework or a programming language. We often use Node.js for
            building back-end services like APIs like Web App or Mobile App.
            It’s used in production by large companies such as Paypal, Uber,
            Netflix, Walmart and so on. <br />
            <br />
            Express.js: Express is a small framework that sits on top of
            Node.js’s web server functionality to simplify its APIs and add
            helpful new features. It makes it easier to organize your
            application’s functionality with middle ware and routing. It adds
            helpful utilities to Node.js’s HTTP objects. It facilitates the
            rendering of dynamic HTTP objects. <br />
            <br />
            Here are the main differences between Node.js and Express.js: <br />
            <li>
              Express.js is used to build web-apps using approaches and
              principles of Node.js but Node.js is used to build server-side,
              input-output, event-driven apps.
            </li>
            <li>Express.js more features than Node.js.</li>
            <li>
              Express.js Controllers are provided but Node.js Controllers are
              not provided.
            </li>
            <li>
              Express.js routing is provided but Node.js routing is not
              provided.
            </li>{" "}
            <br />
            In summary, Node.js is a runtime environment that allows you to run
            JavaScript on the server-side, while Express.js is a web framework
            built on top of Node.js that simplifies the process of building web
            applications.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl mb-8">
          <h1 className="text-3xl font-bold mb-4">
            4.What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-xl font-medium">
            Answer:Custom Hook is a JavaScript function which we create by
            ourselves, when we want to share logic between other JavaScript
            functions. It allows to reuse some piece of code in several parts of
            your app. <br />
            When we want to share the logic between other components, we can
            extract it to a separate function. According to official documents,
            the custom hook has to: <br />
            <li>start with the key word use</li>
            <li>call other hooks</li>
            Create a custom hook for a variety of reasons. Here are a few
            examples: <br />
            <li>
              If find writing the same code repeatedly across multiple
              components, it might be a good idea to extract that logic into a
              custom hook.
            </li>
            <li>
              If a piece of functionality that want to share between different
              components, a custom hook can make it easy to do so.
            </li>
            <li>
              If complex logic that want to abstract away from components, can
              use a custom hook to do so.
            </li>
            <li>
              Custom hooks can help keep code organized and make it easier to
              understand, by extracting complex or repeated logic into a
              separate function.
            </li>
            Overall, custom hooks are a powerful tool for building reusable,
            modular code in React.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
