// import { useState } from "react";
// import Wrapper from "./Profile.styled";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Avatar from "./Avatar/Avatar";
// //     "react-avatar-editor": "^13.0.0",

// const Profile = ({ values }) => {
//   const [avatar, setAvatar] = useState("");
//   const [subscribe, setSubscribe] = useState(true);
//   const [recommended, setRecommended] = useState(true);
//   const [interaction, setInteraction] = useState(true);
//   const [replay, setReplay] = useState(true);
//   const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3,7})$/;

//   const formik = useFormik({
//     initialValues: {
//       userName: values ? values.userName : "",
//       fullName: values ? values.fullName : "",
//       phone: values ? values.phone : "",
//       email: values ? values.email : "",
//       age: values ? values.age : "",
//       gender: values ? values.gender : "",
//       password: values ? values.password : "",
//     },
//     validationSchema: Yup.object({
//       userName: Yup.string().required("Required!"),
//       fullName: Yup.string().required("Required!"),
//       phone: Yup.string()
//         .required("Required!")
//         .matches(phoneRegExp, "Phone number is not valid"),
//       email: Yup.string().required("Required!").email("This mail is not valid"),
//       age: Yup.number("Must be a number")
//         .required("Required!")
//         .test(
//           "valid age",
//           "Must be between 7 and 100",
//           (value) => parseInt(value) > 6 && parseInt(value) < 101
//         ),
//       gender: Yup.string().required("Required!"),
//       password: Yup.string().required("Required!").min(8).max(22),
//     }),
//     onSubmit: (values) => {
//       const notification = {
//         subscribe,
//         recommended,
//         interaction,
//         replay,
//       };

//       values.notification = notification;
//       values.avatar = avatar;

//       console.log("send Data", { values });
//     },
//   });

//   return (
//     <Wrapper>
//       <form action="" onSubmit={formik.handleSubmit}>
//         <div className="dataWrapper">
//           <div className="userInfo">
//             <h4>Personal Information:</h4>

//             <div className="personal">
//               <Avatar setAvatar={setAvatar} />
//               <div className="textInputs">
//                 <div className="inputWrapper">
//                   <input
//                     type="text"
//                     name="userName"
//                     placeholder="User Name"
//                     id="userName"
//                     value={formik.values.userName}
//                     onChange={formik.handleChange}
//                   />

//                   {formik.errors.userName && formik.touched.userName && (
//                     <p>{formik.errors.userName}</p>
//                   )}
//                 </div>
//                 <div className="inputWrapper">
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Full Name"
//                     id="fullName"
//                     value={formik.values.fullName}
//                     onChange={formik.handleChange}
//                   />

//                   {formik.errors.fullName && formik.touched.fullName && (
//                     <p>{formik.errors.fullName}</p>
//                   )}
//                 </div>
//                 <div className="inputWrapper">
//                   <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone"
//                     id="phone"
//                     value={formik.values.phone}
//                     onChange={formik.handleChange}
//                   />
//                   {formik.errors.phone && formik.touched.phone && (
//                     <p>{formik.errors.phone}</p>
//                   )}
//                 </div>
//                 <div className="inputWrapper">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     id="email"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                   />
//                   {formik.errors.email && formik.touched.email && (
//                     <p>{formik.errors.email}</p>
//                   )}
//                 </div>
//                 <div className="inputWrapper">
//                   <input
//                     type="text"
//                     name="age"
//                     placeholder="Age"
//                     id="age"
//                     value={formik.values.age}
//                     onChange={formik.handleChange}
//                   />
//                   {formik.errors.age && formik.touched.age && (
//                     <p>{formik.errors.age}</p>
//                   )}
//                 </div>
//                 <div className="inputWrapper">
//                   <select
//                     name="gender"
//                     id="gender"
//                     value={formik.values.gender}
//                     onChange={formik.handleChange}
//                   >
//                     <option value="">Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                   </select>

//                   {formik.errors.gender && formik.touched.gender && (
//                     <p>{formik.errors.gender}</p>
//                   )}
//                 </div>
//                 <div className="inputWrapper">
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     id="password"
//                     value={formik.values.password}
//                     onChange={formik.handleChange}
//                   />
//                   {formik.errors.password && formik.touched.password && (
//                     <p>{formik.errors.password}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <h4>Notification Permission:</h4>
//             <div className="notification">
//               <label className="container">
//                 Channels you subscribe
//                 <input
//                   type="checkbox"
//                   checked={subscribe}
//                   name="subscribe"
//                   onChange={() => setSubscribe(!subscribe)}
//                 />
//                 <span className="checkmark"></span>
//               </label>
//               <label className="container">
//                 Recommended videos
//                 <input
//                   type="checkbox"
//                   checked={recommended}
//                   name="recommended"
//                   onChange={() => setRecommended(!recommended)}
//                 />
//                 <span className="checkmark"></span>
//               </label>
//               <label className="container">
//                 Interaction on your videos
//                 <input
//                   type="checkbox"
//                   checked={interaction}
//                   name="interaction"
//                   onChange={() => setInteraction(!interaction)}
//                 />
//                 <span className="checkmark"></span>
//               </label>
//               <label className="container">
//                 Replay on your comments
//                 <input
//                   type="checkbox"
//                   checked={replay}
//                   name="replay"
//                   onChange={() => setReplay(!replay)}
//                 />
//                 <span className="checkmark"></span>
//               </label>
//             </div>
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </Wrapper>
//   );
// };

// export default Profile;


import React from 'react'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile