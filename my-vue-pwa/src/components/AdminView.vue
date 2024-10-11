<template>
    <div class="admin-view">
      <h2>Survey Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Response</th>
            <th>Comments</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="submission in submissions" :key="submission.id">
            <td>{{ submission.id }}</td>
            <td>{{ submission.name }}</td>
            <td>{{ submission.email }}</td>
            <td>{{ submission.question1 }}</td>
            <td>{{ submission.comments }}</td>
            <td>{{ submission.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AdminView',
    data() {
      return {
        submissions: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          // Uncomment and update this when using a real API endpoint:
          // const response = await axios.get('https://your-api-endpoint/submissions');
          // this.submissions = response.data;
  
          // Temporarily using the local JSON file instead:
          const response = await fetch('/submissions.json');
          if (response.ok) {
            this.submissions = await response.json();
          } else {
            console.error('Failed to fetch data from local JSON file.');
          }
        } catch (error) {
          console.error('Error fetching survey submissions:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-view {
    margin: 2rem auto;
    max-width: 800px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }
  
  th {
    background-color: #f0f0f0;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>
  