import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const dummyProfiles = [
  {
    id: 1,
    name: "RustMaster42",
    description: "Looking for a chill duo to roam and raid.",
    image: "https://placehold.co/300x400?text=RustMaster42",
  },
  {
    id: 2,
    name: "RaiderQueen",
    description: "Let’s go deep or go home 🔥",
    image: "https://placehold.co/300x400?text=RaiderQueen",
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{
      backgroundColor: darkMode ? '#111827' : '#f3f4f6',
      color: darkMode ? '#fff' : '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s'
    }}>
      <button onClick={() => setDarkMode(!darkMode)} style={{ position: 'absolute', top: 20, right: 20 }}>
        {darkMode ? <Sun /> : <Moon />}
      </button>
      {dummyProfiles.map((profile) => (
        <div key={profile.id} style={{ width: 300, height: 400, boxShadow: '0 4px 10px rgba(0,0,0,0.3)', borderRadius: 20, overflow: 'hidden', backgroundColor: darkMode ? '#1f2937' : '#fff', marginBottom: 24 }}>
          <img src={profile.image} alt={profile.name} style={{ width: '100%', height: '66%', objectFit: 'cover' }} />
          <div style={{ padding: 16 }}>
            <h2 style={{ fontSize: 24, fontWeight: 'bold' }}>{profile.name}</h2>
            <p style={{ marginTop: 8, fontSize: 14 }}>{profile.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
              <button style={{ background: '#ef4444', color: '#fff', padding: '8px 16px', borderRadius: 8 }}>Dislike</button>
              <button style={{ background: '#10b981', color: '#fff', padding: '8px 16px', borderRadius: 8 }}>Like</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}