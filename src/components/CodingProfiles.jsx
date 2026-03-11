import React from 'react';
import { Code2, Terminal, ExternalLink, Cpu } from 'lucide-react';
import './CodingProfiles.css';

const profileData = [
  {
    name: 'LeetCode',
    logo: 'data:image/png;base64,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',
    url: 'https://leetcode.com/u/Bhanu__4840/',
    solved: '500+',
    rating: 'Top 1%',
    color: '#ffa116'
  },
  {
    name: 'CodeChef',
    logo: 'data:image/png;base64,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',
    url: 'https://www.codechef.com/users/bhanuprakash28',
    solved: '300+',
    rating: '3 Star',
    color: '#5b4638'
  },
  {
    name: 'HackerRank',
    logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABQYHAQIDAB/EAEUQAAEDAwEDBgkIBwkAAAAAAAEAAgMEBREGEiExE0FhcYGxIjZRUnORobLBByZCQ3KCotEWMjVVYmOSFCQzU4OT0vDx/8QAGgEBAAINAQAAAAAAAAAAAAAAAAMEAgUGAf/EADIRAQACAQIDBgUCBgMAAAAAAAABAgMEEQUhMhIxNFFxgRMiQWGx0eEUUpGhwfAVIyT/2gAAAW1idAM3Ym9hcmQvPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzEwMTEzNCIvPgogIDxwYXRoIGQ9Ik0zMCwyMCBMNzAsMjAgTDcwLDgwIEwzMCw4MCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMyRUM4NjYiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwYXRoIGQ9Ik0zMCwzNSBMNzAsMzUgTTMwLDUwIEw3MCw1MCBNMzAsNjUgTDcwLDY1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyRUM4NjYiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=',
    url: 'https://www.hackerrank.com/profile/bhanujupalli178',
    solved: '100+',
    status: 'Certified',
    color: '#2ec866'
  },
  {
    name: 'Codeforces',
    logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJIBAAMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHAwQFAgj/xABEEAABAwMBBAQFCAcJAAAAAAAAAQIDBAURBhIhMUEHUXGxExQiNDYhR1RkdXWSt7X/2gAAAW1idAM3Ym9hcmQvPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMxOENFNyIvPgogIDxwYXRoIGQ9Ik0yMCwyMCBMODAsMjAgTDgwLDgwIEwyMCw4MCBaIiBmaWxsPSIjRkZGRkZGIi8+CiAgPHJlY3QgeD0iMzAiIHk9IjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIGZpbGw9IiMzMThDRTciLz4KICA8cmVjdCB4PSIzMCIgeT0iNTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzMxOENFNyIvPgo8L3N2Zz4=',
    url: 'https://codeforces.com/profile/bhanu_23071A0521',
    solved: '200+',
    rating: 'Pupil',
    color: '#318ce7'
  }
];

const CodingProfiles = () => {
  return (
    <section className="section coding-profiles-section">
      <div className="container">
        <h2 className="animate-fade-up">Coding <span className="gradient-text">Profiles</span></h2>

        <div className="profiles-grid">
          {profileData.map((profile, index) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className={`profile-card glass-panel animate-fade-up delay-${index * 100}`}
              style={{ '--profile-color': profile.color }}
            >
              <div className="profile-icon-wrapper">
                {profile.logo ? (
                  <img src={profile.logo} alt={profile.name} className="profile-brand-logo" />
                ) : (
                  <Code2 size={32} />
                )}
              </div>
              <div className="profile-info">
                <h3>{profile.name}</h3>
                <div className="profile-stats">
                  <span className="stat-item">Problem Solved: <strong>{profile.solved}</strong></span>
                  {profile.rating && <span className="stat-item">Rating: <strong>{profile.rating}</strong></span>}
                  {profile.status && <span className="stat-item">Status: <strong>{profile.status}</strong></span>}
                </div>
              </div>
              <div className="profile-arrow">
                <ExternalLink size={20} />
              </div>

              <div className="card-accent"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
