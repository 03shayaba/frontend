import React, { useState, useEffect } from "react";

function TypingEffect() {
  const [text, setText] = useState("");
  const name = "Shayaba Bano"; // 👈 your name
  const speed = 100; // typing speed in ms

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < name.length-1) {
        setText((prev) => prev + name[index]);
        index++;
      } else {
        clearInterval(interval); // ✅ stop before adding undefined
      }
    }, speed);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <h1 style={{ fontFamily: "monospace", color: "purple" }}>
      {text}
    </h1>
  );
}

export default TypingEffect;



// import React, { useState, useEffect } from "react";

// function TypingEffect() {
//   const [text, setText] = useState("");
//   const name = "Shayaba Bano"; // 👈 your text
//   const speed = 150; // typing/deleting speed (ms per letter)
//   const delay = 1000; // pause before deleting (ms)

//   useEffect(() => {
//     let index = 0;
//     let deleting = false;

//     const interval = setInterval(() => {
//       if (!deleting) {
//         // Typing forward
//         if (index < name.length) {
//           setText((prev) => prev + name.charAt(index));
//           index++;
//         } else {
//           deleting = true; // start deleting after finishing
//           setTimeout(() => {}, delay);
//         }
//       } else {
//         // Deleting backward
//         if (index > 0) {
//           setText((prev) => prev.slice(0, -1));
//           index--;
//         } else {
//           deleting = false; // start typing again
//         }
//       }
//     }, speed);

//     return () => clearInterval(interval); // cleanup
//   }, []);

//   return (
//     <h1 style={{ fontFamily: "monospace", color: "purple" }}>
//       {text}
//     </h1>
//   );
// }

// export default TypingEffect;
