import "./bootstrap";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Location";

createInertiaApp({
    resolve: (name) => {
        {
            const pages = import.meta.glob("./Pages/**/*.jsx");
            return pages[`./Pages/${name}.jsx`]();
        }
    },
    // title: (title) => `${title} - ${appName}`,
    // resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    // setup({ el, App, props }) {
    //     const root = createRoot(el);
    //
    //     root.render(<App {...props} />);
    // },
    progress: {
        color: "#4B5563",
    },
});
