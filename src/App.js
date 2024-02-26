import './App.css';
import {Formik, Form, Field} from 'formik';
import {z} from 'zod'
import {toFormikValidationSchema} from 'zod-formik-adapter'
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const mySchema = z.object({
      name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
      email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      }).email({ message: "Invalid email address" }),
      phone: z.string({
          required_error: "Phone is required",
          invalid_type_error: "Phone must be a number"}).regex(phoneRegex, 'Invalid Number!').length(12, {message:'Must be exactly 12 characters long'})
    })

function App() {
  return (
    <div className="App">
    <Formik
      initialValues = {{
        name: '',
        email: '',
        phone: ''}
      }
      validationSchema={toFormikValidationSchema(mySchema)}
      onSubmit = {values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({errors, touched}) => (
        <Form>
          <div className='fieldContainer'>
            <label>Name</label>
            <Field
              name = 'name'
            />
            {errors.name && touched.name &&(<p>{errors.name}</p>)}
          </div>
          <div className='fieldContainer'>
            <label>Email</label>
            <Field
              name = 'email'
            />
            {errors.email && touched.email &&(<p>{errors.email}</p>)}
          </div>
          <div className='fieldContainer'>
            <label>Phone</label>
            <Field
              name = 'phone'              
            />
            {errors.phone && touched.phone &&(<p>{errors.phone}</p>)}
          </div>
          

          <button type='submit'>
            send
          </button>
        </Form>
      )}
    </Formik>
    
   </div>
  );
}

export default App;
