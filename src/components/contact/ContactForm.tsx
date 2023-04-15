import styled from "styled-components";
import {WhiteButton, WhiteH2, WhiteParagraph} from "@/style/global";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import {FormValues, Msg} from "@/interfaces/app_interfaces";
import * as Yup from 'yup'
import Image from "next/image";
import errorIcon from '../../../public/assets/contact/desktop/icon-error.svg'

const FormSection = styled.section`
  height: 764px;
  background-color: #E7816B;
  padding: 72px 24px;
  background-image: url('/assets/shared/desktop/bg-pattern-two-circles.svg');

  .contact-title {
    margin-bottom: 24px;
  }

  .contact-form {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &-button {
      margin-top: 40px;
    }

    &-wrapper {
      width: 100%;
      height: 48px;
      overflow: hidden;
    }

    &-textarea {
      width: 100%;
      height: 126px;
      overflow: hidden;
    }

    &-input {
      background-color: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #fff;
      padding: 0 0 20px 20px;
      color: #fff;
      font-size: 15px;
      line-height: 26px;
      width: 100%;

      position: relative;
      z-index: 1;

      &::placeholder {
        color: #F3C0B5;

      }
    }
  }
`

const ErrorMsg = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: italic;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  position: relative;
  top: -44px;


`
const emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)


const Error = ({msg}: Msg) => {
    return (
        <ErrorMsg className="error-message">
            {msg}
            <Image className="icon" src={errorIcon} alt={'error-icon'} width={20} height={20}/>
        </ErrorMsg>
    )
}

export default function ContactForm() {
    return (
        <FormSection>
            <div className="contact-section">
                <WhiteH2 className="contact-title">Contact Us</WhiteH2>
                <WhiteParagraph>
                    Ready to take it to the next level? Let’s talk about your project or idea and find out how we can
                    help
                    your business grow. If you are looking for unique digital experiences that’s relatable to your
                    users,
                    drop us a line.
                </WhiteParagraph>
            </div>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Can’t be empty'),
                        email: Yup.string().required('Can’t be empty').matches(emailRegex, "Email is incorrect"),
                        phone: Yup.string().required('Can’t be empty'),
                        message: Yup.string().required('Can’t be empty'),
                    })}
                    onSubmit={(
                        values: FormValues,
                        {setSubmitting}: FormikHelpers<FormValues>
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}>
                <Form className="contact-form">
                    <div className="contact-form-wrapper">
                        <Field className="contact-form-input" id="name" name="name" placeholder="Name"/>
                        <ErrorMessage name="name" render={msg => <Error msg={msg}/>}/>
                    </div>
                    <div className="contact-form-wrapper">
                        <Field className="contact-form-input" id="email" name="email" placeholder="Email Address"/>

                        <ErrorMessage name="email" render={msg => <Error msg={msg}/>}/>
                    </div>
                    <div className="contact-form-wrapper">
                        <Field className="contact-form-input" id="phone" name="phone" placeholder="Phone"/>
                        <ErrorMessage name="phone" render={msg => <Error msg={msg}/>}/>
                    </div>
                    <div className="contact-form-textarea">
                        <Field className="contact-form-input" as="textarea" id="message" name="message"
                               placeholder="Your Message"
                               rows="4"/>
                        <ErrorMessage name="message" render={msg => <Error msg={msg}/>}/>
                    </div>
                    <WhiteButton className="contact-form-button" type="submit">
                        Submit
                    </WhiteButton>
                </Form>
            </Formik>
        </FormSection>
    )
}