// import {useFormik} from 'formik'
// import {z} from 'zod'
// import {toFormikValidationSchema} from 'zod-formik-adapter'


// function form(){
//   const mySchema = z.object({
//     name: z.string({
//       required_error: "Name is required",
//       invalid_type_error: "Name must be a string",
//     }),
//     email: z.string(),
//     phone: z.number()
//   })
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: ''
//     },
//     validationSchema: toFormikValidationSchema(mySchema),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     }
//   })
//   return(
//     <div>
//       <h1>Form</h1>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="name">User`s name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.name}
//            />
    
//         <label htmlFor="email">Email Address</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//            />

//         <label htmlFor="phone">Phone number</label>
//           <input
//             id="phone"
//             name="phone"
//             type="tel"
//             onChange={formik.handleChange}
//             value={formik.values.phone}
//            />
//        <button type="submit">Submit</button>
//      </form>
//     </div>
//   )
// }