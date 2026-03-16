"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Meeting from "./Meeting";
import Image from "next/image";
import { PuffLoader } from "react-spinners";
import { Check, X } from "lucide-react";

interface ContactFormValues {
    name: string;
    email: string;
    phone: string;
    status: string;
}

const initialValues: ContactFormValues = {
    name: "",
    email: "",
    phone: "",
    status: "New Lead",
};

type SubmissionState = "idle" | "submitting" | "success" | "error" | "meeting";

const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    phone: Yup.string().required("Phone number is required")
        .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
});

function LeadForm() {

    const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (
        values: ContactFormValues,
        { resetForm }: { resetForm: () => void }
    ) => {

        setSubmissionState("submitting");

        const googleScriptUrl = process.env.GOOGLE_SHEET_URL

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });


            const result = await response.json();

            console.log("Submission result:", result);

            if (result.success) {
                resetForm();
                setSubmissionState("success");
            } else {
                console.log("Here's the Submission error:", result.error);
                setErrorMessage(result.error || "Failed to submit the form. Please try again.");
                setSubmissionState('error');

            }

            if (window.gtag) {
              window.gtag("event", "generate_lead", {
                form_name: "contact_form",
              });
            }
        } catch (err) {
            setErrorMessage("An error occurred while submitting the form. Please try again later.");
            setSubmissionState('error')
        }

    };



    return (
        <section className="bg-my-deep-black py-12" id="contact">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                {
                    submissionState === "idle" &&
                    <div className="bg-my-white shadow-md shadow-my-gray/10 p-6 md:p-13 rounded-3xl border-my-gray/10 border">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-6">
                                <h2 className="font-bold text-my-black text-3xl md:text-5xl">Book a Free Inspection Session</h2>
                                <p className="text-xl max-w-4xl">Fill in your details to get started.</p>
                            </div>
                            <div>
                                <Formik<ContactFormValues>
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    <Form className="flex flex-col gap-4 md:max-w-md text-base mb-8 w-full">

                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="outline outline-my-gray/20 focus:outline-my-gray/80 bg-my-deep-black py-2 px-4 rounded-xl placeholder-my-gray"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="outline outline-my-gray/20 focus:outline-my-gray/80 bg-my-deep-black py-2 px-4 rounded-xl placeholder-my-gray"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />

                                        <label htmlFor="phone" className="sr-only">Phone</label>
                                        <Field
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="outline outline-my-gray/20 focus:outline-my-gray/80 bg-my-deep-black py-2 px-4 rounded-xl placeholder-my-gray"
                                            placeholder="Phone Number"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="p"
                                            className="text-red-500 text-sm"
                                        />
                                        <button
                                            className="text-my-white px-5 py-2 bg-my-black rounded-2xl font-semibold text-lg w-max transition-colors duration-300 hover:outline hover:outline-my-lime hover:text-my-lime hover:bg-my-blacker cursor-pointer"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                }
                {
                    submissionState === "submitting" &&
                    <div className="bg-my-white shadow-md shadow-my-gray/10 px-6 md:px-10 py-16 md:py-24 rounded-3xl border-my-gray/10 border">
                        <div className="flex justify-center items-center gap-4 flex-col">
                            <PuffLoader size={70} color={"#0FA6E5"} />
                            <p className="text-xl">Submitting</p>
                        </div>
                    </div>
                }
                {
                    submissionState === "success" &&
                    <div className="bg-my-white shadow-md shadow-my-gray/10 px-6 md:px-10 py-16 md:py-24 rounded-3xl border-my-gray/10 border">
                        <div className="flex justify-center items-center gap-4 flex-col">
                            <div className="p-3 bg-my-blacker border border-my-blue rounded-full">
                                <Check color={"#0FA6E5"} size={55} />
                            </div>
                            <p className="text-xl max-w-2xl text-center">We have recieved your form. Book a meeting to get started with your transformation</p>
                            <button
                                onClick={() => setSubmissionState("meeting")}
                                className="text-my-white px-5 py-2 bg-my-black rounded-2xl font-semibold text-lg w-max transition-colors duration-300 hover:outline hover:outline-my-lime hover:text-my-lime hover:bg-my-blacker cursor-pointer"
                            >
                                Book a Meeting
                            </button>
                        </div>
                    </div>
                }

                {
                    submissionState === "error" &&
                    <div className="bg-my-white shadow-md shadow-my-gray/10 px-6 md:px-10 py-16 md:py-24 rounded-3xl border-my-gray/10 border">
                        <div className="flex justify-center items-center gap-4 flex-col">
                            <div className="p-3 bg-my-blacker border border-red-500 rounded-full">
                                <X color="#cc3b47" size={55} />
                            </div>
                            <p className="text-xl max-w-2xl text-center">{errorMessage}</p>
                            <button
                                onClick={() => setSubmissionState("idle")}
                                className="text-my-white px-5 py-2 bg-my-black rounded-2xl font-semibold text-lg w-max transition-colors duration-300 hover:outline hover:outline-my-lime hover:text-my-lime hover:bg-my-blacker cursor-pointer"
                            >
                                Back to Form
                            </button>
                        </div>
                    </div>
                }
                {
                    submissionState === "meeting" &&
                    <div className="">
                        <Meeting />
                    </div>
                }
            </div>
        </section>
    )
}

export default LeadForm