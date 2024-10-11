<template>
    <header class="header">
      <h1>Survey App</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .header nav a {
    color: white;
    text-decoration: none;
  }
  </style>
  