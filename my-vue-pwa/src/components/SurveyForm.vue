<!-- src/components/SurveyForm.vue -->
<template>
    <form @submit.prevent="handleSubmit" class="survey-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="formData.name" id="name" />
        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
      </div>
  
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" id="email" />
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      </div>
  
      <div class="form-group">
        <label for="question1">How satisfied are you with our service?</label>
        <select v-model="formData.question1" id="question1">
          <option value="" disabled>Select an option</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
        </select>
        <p v-if="errors.question1" class="error-message">{{ errors.question1 }}</p>
      </div>
  
      <div class="form-group">
        <label for="comments">Additional Comments:</label>
        <textarea v-model="formData.comments" id="comments" />
        <p v-if="errors.comments" class="error-message">{{ errors.comments }}</p>
      </div>
  
      <button type="submit">Submit Survey</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'SurveyForm',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          question1: '',
          comments: '',
        },
        errors: {},
      };
    },
    methods: {
      handleSubmit() {
        this.errors = {};
        if (!this.formData.name) {
          this.errors.name = 'Name is required';
        }
        if (!this.formData.email) {
          this.errors.email = 'Email is required';
        } else if (!this.validateEmail(this.formData.email)) {
          this.errors.email = 'Invalid email address';
        }
        if (!this.formData.question1) {
          this.errors.question1 = 'This field is required';
        }
  
        if (Object.keys(this.errors).length === 0) {
          console.log(this.formData);
          // Example: Send the form data to your backend API
          // axios.post('/api/submit-survey', this.formData).then(response => console.log(response));
        }
      },
      validateEmail(email) {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email);
      },
    },
  };
  </script>
  
  <style scoped>
  .survey-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: auto;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .error-message {
    color: red;
    font-size: 0.875rem;
  }
  
  button {
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  