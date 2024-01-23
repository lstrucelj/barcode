import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/SEO";
const config = require("../../../data/SiteConfig.js");

export default ({
    pageContext: { slug },
    location: { pathname },
    data: {
        service,
        service: {
            html,
            frontmatter: { title, cover },
        },
        services: { edges },
    },
}) => {
    const serviceNode = service;
    const services = edges; // todo: ostale usluge lista
    return (
        <Layout className="service" pathname={pathname}>
            <SEO servicePath={slug} serviceNode={serviceNode} serviceSEO />

            <main className="service">
                <div role="main" className="main">
                    <section className="page-header page-header-modern custom-page-header bg-color-quaternary">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                                    <h1
                                        className="font-weight-bold text-9 text-color-secondary appear-animation"
                                        data-appear-animation="fadeInRightShorter"
                                        data-appear-animation-delay="100"
                                    >
                                        {title}
                                    </h1>
                                </div>
                                <div className="col-md-4 order-1 order-md-2 align-self-center">
                                    <ul
                                        className="breadcrumb d-block text-md-end appear-animation"
                                        data-appear-animation="fadeInLeftShorter"
                                        data-appear-animation-delay="300"
                                    >
                                        <li>
                                            <a href="/">Naslovna</a>
                                        </li>
                                        <li className="active">Usluge</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-lg-9">
                                <div
                                    dangerouslySetInnerHTML={{ __html: html }}
                                />
                            </div>
                            <div className="col-lg-3 pt-4 pt-lg-0">
                                <div className="card border-radius-0 box-shadow-1 border-0 me-lg-3 p-3 mb-3 mb-lg-0">
                                    <img
                                        src={cover}
                                        className="img-fluid border-radius-0"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col py-5">
                                <hr className="m-0" />
                            </div>
                        </div>
                    </div>

                    <section className="are-you-looking-for bg-color-secondary">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-5">
                                    <p
                                        className="text-uppercase font-weight-semibold mb-1 text-color-light appear-animation"
                                        data-appear-animation="fadeInRightShorter"
                                        data-appear-animation-delay="100"
                                    >
                                        <span
                                            className="line-pre-title bg-color-primary appear-animation"
                                            data-appear-animation="fadeInRightShorter"
                                            data-appear-animation-delay="200"
                                        ></span>
                                        Imate li pitanja?
                                    </p>
                                    <h2
                                        className="text-color-light font-weight-bold mb-1 letter-spacing-08 font-size-32 appear-animation"
                                        data-appear-animation="fadeInRightShorter"
                                        data-appear-animation-delay="200"
                                    >
                                        Tu smo zbog Vas!
                                    </h2>
                                    <p
                                        className="font-weight-semibold text-color-light mb-0 appear-animation"
                                        data-appear-animation="fadeInRightShorter"
                                        data-appear-animation-delay="300"
                                    >
                                        Rado ćemo Vam pomoći, saslušati Vaše
                                        prijedloge i učiniti sve da budete
                                        zadovoljni.
                                    </p>
                                </div>
                                <div className="col-xl-6 d-flex align-items-start align-items-sm-center justify-content-start justify-content-xl-end mt-4 mt-xl-0 flex-column flex-sm-row">
                                    <div>
                                        <span
                                            className="are-you-looking-for-phone py-2 d-flex align-items-center text-color-light font-weight-semibold text-uppercase text-4 mb-4 mb-md-0 appear-animation"
                                            data-appear-animation="fadeInLeftShorter"
                                            data-appear-animation-delay="500"
                                            style={{
                                                paddingBottom: "0px !important",
                                                marginBottom: "8px !important",
                                            }}
                                        >
                                            <span>
                                                <img
                                                    width="18"
                                                    height="25"
                                                    src="/images/phone.svg"
                                                    alt="Phone"
                                                />
                                            </span>
                                            <a
                                                className="text-color-light text-decoration-none"
                                                href={`tel:${config.userMobileNumber}`}
                                            >
                                                {config.userMobileNumber}
                                            </a>
                                        </span>
                                        <span
                                            className="are-you-looking-for-phone py-2 d-flex align-items-center text-color-light font-weight-semibold text-uppercase text-4 mb-4 mb-md-0 appear-animation"
                                            data-appear-animation="fadeInLeftShorter"
                                            data-appear-animation-delay="500"
                                        >
                                            <span>
                                                <img
                                                    width="25"
                                                    height="18"
                                                    src="/images/mail.svg"
                                                    alt="Mail"
                                                />
                                            </span>
                                            <a
                                                className="text-color-light text-decoration-none"
                                                href={`mailto:${config.userMail}`}
                                                style={{
                                                    textTransform: "lowercase",
                                                }}
                                            >
                                                {config.userMail}
                                            </a>
                                        </span>
                                    </div>

                                    <a
                                        href="/#kontakt"
                                        className="btn btn-primary custom-btn text-center text-uppercase text-decoration-none border-0 py-0 px-5 font-weight-semibold appear-animation"
                                        data-appear-animation="fadeInLeftShorter"
                                        data-appear-animation-delay="600"
                                    >
                                        Kontaktirajte nas
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    );
};

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
    query ($slug: String!) {
        service: markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                cover
                date
                twitter
                facebook
            }
            fields {
                slug
            }
        }
        services: allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___orderId], order: DESC }
            filter: { fields: { slug: { ne: $slug } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        cover
                        date
                    }
                }
            }
        }
    }
`;
