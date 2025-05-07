import React from 'react';
import RecentProjects from '../components/recentProjects';
export default function Projects() {
    return (
        <div style={{
            backgroundColor:'#E9D8A6'
        }}>
            {/* Header Section */}
            <div

                style={{
                    backgroundImage: "url('/images/projectsBg.PNG')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '40vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px',
                    margin: 10,
                }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Innovative Projects for Sustainable Growth
                </h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Transforming Communities Through Sustainable Practices
                </p>
            </div>

            {/* Content Section */}
            <div>
                <h2 style={{ fontSize: '2rem', textAlign: 'center', margin: '20px 0' }}>
                    Current Sustainable Initiatives
                </h2>
                <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem' }}>
                    Empowering local communities through innovative agricultural and aquaculture projects.
                </p>

                {/* Projects Section */}
                <RecentProjects />
            </div>
        </div>
    );
}