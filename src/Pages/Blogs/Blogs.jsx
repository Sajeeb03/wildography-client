import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className='my-3 md:my-12'>
            <h1 className="text-4xl font-bold text-center mb-12">Welcome to blogs!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12'>
                <div className="border-2 border-white rounded-lg p-8">
                    <h1 className="text-2xl font-semibold">Difference between SQL and NoSQL</h1>

                    <p>
                        From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.
                    </p>
                </div>
                <div className="border-2 border-white rounded-lg p-8">
                    <h1 className="text-2xl font-semibold">What is JWT, and how does it work?</h1>

                    <p>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                    </p>
                </div>
                <div className="border-2 border-white rounded-lg p-8">
                    <h1 className="text-2xl font-semibold">What is the difference between javascript and NodeJS?</h1>

                    <p>
                        JavaScript is a popular programming language utilized by nearly every online application developer. Finding a resource on the subject to work on JavaScript and conduct critical development is straightforward.

                        Although Node JS is a JavaScript framework extension, it also has other unnamed features, such as a non-blocking running control system, essential for attaining business objectives. It may also be visible to a user who has signed in from a different approach for security reasons. When it comes to a comparison of nest js vs. express, both are node js components.
                    </p>
                </div>
                <div className="border-2 border-white rounded-lg p-8">
                    <h1 className="text-2xl font-semibold">How does NodeJS handle multiple requests at the same time?</h1>

                    <p>
                        A multithreaded app fails big if you need to allocate lots of RAM per thread. First, the RAM usage itself means you can't handle as many requests as a singlethreaded app. Worse, malloc is slow. Allocating lots and lots of objects (which is common for modern web frameworks) means we can potentially end up being slower than singlethreaded apps. This is where node.js usually win.

                        One use-case that end up making multithreaded worse is when you need to run another scripting language in your thread. First you usually need to malloc the entire runtime for that language, then you need to malloc the variables used by your script.

                        So if you're writing network apps in C or go or java then the overhead of threading will usually not be too bad. If you're writing a C web server to serve PHP or Ruby then it's very easy to write a faster server in javascript or Ruby or Python.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;