const routes = {
    // 404: {
    //     template: "/static/404.html",
    //     title: "404",
    //     description: "Page not found",
    // },
    "/": {
        template: "/static/index.html",
        title: "Never gonna give you up!",
        description: "Never gonna let you down Collaborative learn table.",
    },
    // about: {
    //     template: "/static/about.html",
    //     title: "About Us",
    //     description: "This is the about page",
    // },
    // contact: {
    //     template: "/static/contact.html",
    //     title: "Contact Us",
    //     description: "This is the contact page",
    // },
};

const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the routes object
    const route = routes[location] || routes["/"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};


module.exports = locationHandler;