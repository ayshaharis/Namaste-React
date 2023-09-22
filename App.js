const heading=React.createElement("h1",{id:"heading",className:"headingclass"},"Hello world from React");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);





   /* <div id="parent">
     <div id="child">
       <h1>
        I am  an H1 tag
       </h1>
       <h2>
        I am an h2 tag
       </h2>
     </div>
    </div>
    */

//how to do the above structure of html in Pure react 

const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an H1 tag"),
React.createElement("h1",{},"and we are Siblings")]));
console.log(parent);
root.render(parent);

//above code is so messy thats hy we use JSX to create HTML eleme
