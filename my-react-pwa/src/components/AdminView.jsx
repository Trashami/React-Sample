import React, { useState, useEffect } from "react";
import "../App.css"; 

function AdminView() {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      // Fetch data from the local JSON file or API if it was available...
      const response = await fetch("/submissions.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data from local JSON file.");
      }
      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      console.error("Error fetching survey submissions:", err);
      setError(err.message);
    }
  };

  return (
    <div className="admin-view">
      <h2>Survey Submissions</h2>
      {error && <p className="error-message">{error}</p>}
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
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.id}</td>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.question1}</td>
              <td>{submission.comments}</td>
              <td>{submission.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminView;
