import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/profiles")
      .then(res => res.json())
      .then(data => setProfiles(data));
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: darkMode ? '#111' : '#f0f0f0',
      color: darkMode ? '#fff' : '#000',
      transition: 'all 0.3s ease'
    }}>
      <button onClick={() => setDarkMode(!darkMode)} style={{ position: 'absolute', top: 20, right: 20 }}>
        {darkMode ? "🌞" : "🌙"}
      </button>
      {profiles.map(profile => (
        <div key={profile._id} style={{
          width: 300,
          height: 400,
          marginBottom: 30,
          backgroundColor: darkMode ? '#222' : '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}>
          <img src={profile.image} alt={profile.name} style={{ width: '100%', height: '70%', objectFit: 'cover' }} />
          <div style={{ padding: 16 }}>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}