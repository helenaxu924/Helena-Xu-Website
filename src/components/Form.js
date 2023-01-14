// import "./FormStyles.css";
// import { Input, TextArea, Button } from "semantic-ui-react";
// import Swal from "sweetalert2";
// import emailjs from "emailjs-com";


// const Form = () => {
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
//       .then((result) => {
//         console.log(result.text);
//         Swal.fire({
//           icon: "success",
//           title: "Message Sent Successfully"
//         })
//       }, (error) => {
//         console.log(error.text);
//         Swal.fire({
//           icon: "error",
//           title:"Oops, something went wrong",
//           text: error.text,
//         })
//       });
//     e.target.reset()
//   };

//   return (
//     <div className="form">
//         <form onSubmit={handleOnSubmit}>
//             <label>Your Name</label>
//             <input type="text"></input>
//             <label>Email</label>
//             <input type="email"></input>
//             <label>Message</label>
//             <textarea rows="6" placeholder="Type your message here" />
//             <button className="btn">Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Form