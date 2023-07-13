/* eslint-disable react/jsx-no-bind */
import React from "react";

import withRouter from "./withRouter";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <>
            <div className="app-main-wrapper">
                <div className="page-wrapper">{props.children}</div>
            </div>
        </>
    );
};

export default withRouter(Layout);
