import React from 'react'

// function Greet(){
//     return(
//         <div>
//             <h1>Greet Component</h1>
//         </div>
//     );
// }

const Greet = (props) => {

return (
<div>
<h1>Hello {props.name}</h1>
{props.children}
</div>
)
}
export default Greet;