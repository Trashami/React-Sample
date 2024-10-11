import React from "react";
import { useForm } from "react-hook-form";
import "../App.css"; 

function SurveyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Example: Send the data to your backend
    // axios.post("/api/submit-survey", data).then(response => console.log(response));
    //This is how the front-end doesn't get affected by the backend;
    //Unfortunatly, without the backend setup or we use something like Firebase.
    //I usually use json server to setup a fake backend from the submissions.json file. This would go here
       };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="survey-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { 
            required: "Email is required", 
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="question1">How satisfied are you with our service?</label>
        <select id="question1" {...register("question1", { required: "This field is required" })}>
          <option value="">Select an option</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
        </select>
        {errors.question1 && <p className="error-message">{errors.question1.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="comments">Additional Comments:</label>
        <textarea
          id="comments"
          {...register("comments", { maxLength: { value: 200, message: "Maximum length is 200 characters" } })}
        />
        {errors.comments && <p className="error-message">{errors.comments.message}</p>}
      </div>

      <button type="submit">Submit Survey</button>
    </form>
  );
}

export default SurveyForm;
