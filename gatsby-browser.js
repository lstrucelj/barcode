const addScript = (url) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
};

exports.onInitialClientRender = () => {
    addScript("/js/theme.min.js");
    addScript("/js/view.contact.min.js");
    addScript("/js/site_main.min.js");

    addScript("/js/theme.init.min.js");
    console.log("ReactDOM.render has executed");
};

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
    const { pathname } = location;
    const scrollToTopRoutes = [`/`];
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo(0, 0);
    }

    return false;
};
