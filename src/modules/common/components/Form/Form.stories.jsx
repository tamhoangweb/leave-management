import GlobalStyle from '../GlobalStyle';
import Form from './Form';
import { Field } from 'react-final-form';

export default {
    title: 'Example/Form',
    component: Form,
};

const Template = () => {
    return (
        <>
            <GlobalStyle />
            <Form
                onSubmit={(values) => {
                    console.log('on submit', values);
                }}
            >
                <div>
                    <label>First Name</label>
                    <Field name="firstName" component="input" type="text" placeholder="First Name" />
                </div>
                <div>
                    <label>Last Name</label>
                    <Field name="lastName" component="input" type="text" placeholder="Last Name" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};

export const Default = Template.bind({});
