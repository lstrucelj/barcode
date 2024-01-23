import React from "react";
import "../scss/index.scss";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default ({ children, className, isHomePage }) => (
    <div className="body">
        <Header isHomePage={isHomePage} />
        <div className={className}>{children}</div>
        <Footer />
    </div>
);
