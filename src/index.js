import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// CHALLENGE - 1
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>My favourite foods.</h1>
//     <ul>
//       <li> Chicken </li>
//       <li> Mutton </li>
//       <li> Pork </li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// Learning
// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "Praneet";
// const lname = "Karna";
// const lucky_number = 2;

// ReactDOM.render(
//   <div>
//     <h1>Hello {fname + " " + lname}!</h1>
//     <p>Your lucky number is {lucky_number}.</p>
//     <p>Your lucky number is not {2 + 1212 - 121}.</p>
//   </div>,
//   document.getElementById("root")
// );

// Challenge 2
// const name = "Praneet Karna";
// const date = new Date();
// const year = date.getFullYear();

// ReactDOM.render(
//   <div>
//     <p> Created by {name}</p>
//     <p> Copyright {year}</p>
//   </div>,
//   document.getElementById("root")
// );

// attributes using jsx
// const imgUrl = "https://picsum.photos/200";

// ReactDOM.render(
//   <div>
//     <h1>My favourite foods.</h1>
//     <ul>
//       <img src={imgUrl + "?grayscale"} />
//       <img src={imgUrl} />
//       <img src={imgUrl + "?blur"} />
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

//Inline CSS styling
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "green";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
