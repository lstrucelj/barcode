import React from "react";

export default () => (
    <footer
        id="footer"
        className="m-0 border-0 bg-color-quaternary overflow-hidden"
    >
        <div className="footer-copyright container bg-color-quaternary">
            <div className="row">
                <div className="col-lg-12 text-center m-0">
                    <p className="text-color-grey">
                        BAR CODE j.d.o.o. © 2024. All Rights Reserved
                    </p>
                </div>
                <div className="col-lg-12 text-center m-0">
                    <p
                        className="text-color-grey"
                        style={{
                            fontSize: "0.7em",
                            marginTop: "50px",
                        }}
                    >
                        Developed by{" "}
                        <a href="https://leonastrucelj.com/">
                            leonastrucelj.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);
