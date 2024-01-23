import React from "react";
// import { Link } from "gatsby";

export default ({ services }) => (
    <>
        {services.map(
            (
                {
                    node: {
                        fields: { slug },
                        frontmatter: { title, description, openOnStart },
                    },
                },
                index
            ) => (
                <div
                    key={title}
                    className="border-radius mb-1 border-0 card-accordion-our-services-container"
                >
                    <div className="card-header py-2 bg-color-quaternary">
                        <h4 className="card-title m-0">
                            <a
                                className="accordion-toggle text-color-tertiary font-weight-semibold"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordionServices"
                                href={`#colapse${index}one`}
                            >
                                {title}
                            </a>
                        </h4>
                    </div>
                    <div
                        id={`colapse${index}one`}
                        className={`collapse card-accordion-our-services ${
                            openOnStart ? "show" : ""
                        }`}
                    >
                        <div className="card-body">
                            <p className="mb-0">{description}</p>
                            <a
                                href={slug}
                                className="font-weight-bold text-uppercase text-decoration-none d-block mt-3"
                            >
                                Saznajte više +
                            </a>
                        </div>
                    </div>
                </div>
            )
        )}
    </>
);
