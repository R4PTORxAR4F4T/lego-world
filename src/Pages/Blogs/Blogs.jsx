import React from 'react';

const Blogs = () => {
    return (
        <div className="w-4/6 mx-auto p-4 my-2">
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>Blogs</p>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
              <div className="collapse-title text-xl font-medium">
              What is an access token and refresh token? How do they work and where should we store them on the client-side?
              </div>
              <div className="collapse-content">
                <p className='mb-3'>Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.</p>
                <p className='mb-3'>A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.</p>
                <hr  />
                <p className='my-3'>The access token is usually short-lived and intended for use in the current session. It is commonly stored in memory or in a secure HTTP-only cookie. Storing it in memory allows easy access and retrieval when making API requests. Storing it in an HTTP-only cookie helps mitigate certain types of cross-site scripting (XSS) attacks, as the cookie is not accessible to JavaScript.</p>
                <p className='mb-3'>The refresh token is a more sensitive credential and should be stored securely. It is typically stored in a long-lived storage mechanism such as a secure HTTP-only cookie, local storage, or encrypted in a client-side database. Storing it in an HTTP-only cookie adds an extra layer of security by protecting it from JavaScript access and reducing the risk of cross-site scripting attacks. Local storage or client-side databases can be used, but they may be more vulnerable to certain types of attacks, such as cross-site scripting.</p>
                <hr />
                <p className='my-3'>access tokens and refresh tokens should be stored in secure locations like Memory, Local Storage, Encrypted client-side etc</p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
              <div className="collapse-title text-xl font-medium">
              Compare SQL and NoSQL databases?
              </div>
              <div className="collapse-content">

                <p className='mb-3'>SQL databases are relational, and NoSQL databases are non-relational.</p>
                <p className='mb-3'>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases h   ave dynamic schemas for unstructured data.</p>
                <p className='mb-3'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. </p>
                <p className='mb-3'>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-colu   mn stores.</p>
                <p className='mb-3'>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data    like documents or JSON.</p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
              <div className="collapse-title text-xl font-medium">
              What is express js? What is Nest JS ?
              </div>
              <div className="collapse-content">
                <p className='my-3'>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and intuitive API to build web applications and APIs.</p>
                <p className='mb-3'>Express.js focuses on being lightweight and unopinionated, allowing developers to have more control over the application's architecture and design choices.</p>
                <p className='mb-3'>It provides routing capabilities, middleware support, and integrates well with other modules and libraries, making it highly extensible.</p>
                <p className='mb-3'>Express.js is widely used for building RESTful APIs, single-page applications (SPAs), and microservices.</p>
                <hr />
                <p className='my-3'>NestJS is a progressive, opinionated framework for building efficient and scalable server-side applications with TypeScript. It is built on top of Express.js and leverages its underlying features.</p>
                <p className='mb-3'>NestJS follows the architectural pattern of modules, controllers, and services, inspired by Angular. This pattern promotes modularity, code organization, and separation of concerns.</p>
                <p className='mb-3'>It provides decorators and dependency injection, making it easy to define and manage dependencies between different parts of the application.</p>
                <p className='mb-3'>NestJS offers a powerful CLI tool for generating code and scaffolding application structure, as well as built-in support for features like validation, serialization, and exception handling.</p>
                <p className='mb-3'>It supports various transport layers, allowing developers to build APIs using REST, WebSockets, gRPC, and more.</p>
                <p className='mb-3'>NestJS is often used for building complex enterprise-level applications, microservices architectures, and scalable server-side applications.</p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
              <div className="collapse-title text-xl font-medium">
              What is MongoDB aggregate and how does it work ?
              </div>
              <div className="collapse-content">
                <p className='mb-3'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
              </div>
            </div> 
        </div>
    );
};

export default Blogs;