export default function Services() {
    return (
        <div>
            <div style={{
                backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1>Our Services</h1>
                <p>Innovative Solutions for a Sustainable Future</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '20px',
                backgroundColor: '#f9f9f9',
            }}>
                <div style={{
                    width: '300px',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                }}>
                    <img 
                        src="/vite.svg" 
                        alt="Fish Fingerling Hatcheries" 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                    />
                    <h3>Fish Fingerling Hatcheries</h3>
                    <p>Our hatcheries utilize advanced techniques to produce high-quality fish fingerlings, ensuring a sustainable supply for local aquaculture operations.</p>
                </div>
                <div style={{
                    width: '300px',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                }}>
                    <img 
                        src="/vite.svg" 
                        alt="Sea Cage Farming" 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                    />
                    <h3>Sea Cage Farming</h3>
                    <p>We implement cutting-edge sea cage farming methods that promote optimal growth conditions while minimizing environmental impact.</p>
                </div>
                <div style={{
                    width: '300px',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                }}>
                    <img 
                        src="/vite.svg" 
                        alt="Integrated Aquaculture Systems" 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                    />
                    <h3>Integrated Aquaculture Systems</h3>
                    <p>Our integrated systems combine aquaculture with other agricultural practices to enhance productivity and sustainability.</p>
                </div>
            </div>
        </div>
    );
}
