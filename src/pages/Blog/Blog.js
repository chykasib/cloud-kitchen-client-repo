import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import useTitle from '../../Hooks/UseTitle';
const Blog = () => {
    useTitle('Blog')
    return (
        <Container className='my-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h5> <b>Q1: </b> Difference between SQL and NoSQL?</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-start'><b>SQL:</b> <br />
                            <li>SQL databases are primarily called RDBMS or Relational Databases</li>
                            <li>Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</li>
                            <li>Structured query language (SQL)	</li>
                            <li>An ideal choice for the complex query intensive environment.</li>
                            <li>RDBMS database is the right option for solving ACID problems.</li>
                        </p>
                        <p className='text-start'><b>NoSQL:</b> <br />
                            <li>NoSQL databases are primarily called as Non-relational or distributed database</li>
                            <li>NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</li>
                            <li>NoSQL databases use dynamic schema for unstructured data.</li>
                            <li>Many different types which include key-value stores, document databases, and graph databases.</li>
                            <li>Use when it’s more important to have fast data than correct data</li>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h5><b>Q2: </b>What is JWT, and how does it work?</h5>

                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-start'><b>JWT:</b> <br />
                            <li>JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs).</li>
                        </p>
                        <p className='text-start'><b>work:</b> <br />
                            <li>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</li>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h5><b>Q3: </b>What is the difference between javascript and NodeJS?</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-start'><b>javascript:</b> <br />
                            <li>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</li>
                            <li>It's a programming language, after all. Any browser with a competent browser engine will operate.</li>
                            <li>The node community does not care about JavaScript.</li>
                            <li>It's a new release of the ECMA script that works on the C++-based V8 engine.</li>
                            <li>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</li>
                        </p>
                        <p className='text-start'><b>NodeJS:</b> <br />
                            <li>It's a bridge, open-source Js runtime environment for executing Js on the server.</li>
                            <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</li>
                            <li>It's mainly popular on the server-side.</li>
                            <li>C++, C, and JavaScript are used.</li>
                            <li>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.
                            </li>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <h5><b>Q4: </b>How does NodeJS handle multiple requests at the same time?</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-start'><br />
                            <li>Multiple clients make multiple requests to the NodeJS server.NodeJS receives these requests and places them into the EventQueue.NodeJS server has an internal.</li>
                            <li>s operates on a singlethread using nonblocking I/O calls allowing it to support tens of thousands of concurrent connections held in the event loop.Diagram.</li>
                            <li>This is not to be confused with the same type of concurrency as running in parallel on multiple cores.Javascript is single threaded so each program runs on.</li>
                            <li>Simplicity to create multiple HTTP Request in Parallel for NodeJS.To make a multiple http request you have to use.add for each.</li>
                            <li>Nodejs is a singlethreaded event loopbased architecture!! A simple guide to JavaScript concurrency in Node.js | TSH.io.
                            </li>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;