export default function ContactsUs() {
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(to right,rgb(231, 158, 231),rgb(146, 11, 117))",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Stay Informed
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Subscribe to our newsletter for updates on sustainable solutions and community initiatives.
            </p>
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    width: '100%',
                    maxWidth: '600px',
                }}
            >
                <input
                    type="text"
                    placeholder="Name"
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    style={{
                        flex: 2,
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                    }}
                />
                <button
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#0072ff',
                        color: 'white',
                        fontSize: '1rem',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}