import { Form as FinalForm, Field } from 'react-final-form';

// const Form = ({ children, onSubmit }) => {
//     return (
//         <FinalForm
//             onSubmit={onSubmit}
//             render={({ handleSubmit, form, submitting, pristine, values }) => (
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label>First Name</label>
//                         <Field name="firstName" component="input" type="text" placeholder="First Name" />
//                     </div>
//                 </form>
//             )}
//         />
//     );
// };

const Form = ({ onSubmit, children, ...restProps }) => (
    <FinalForm onSubmit={onSubmit}>
        {(props) => (
            <form {...restProps} onSubmit={props.handleSubmit}>
                {children}
            </form>
        )}
    </FinalForm>
);

export default Form;
