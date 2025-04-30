
export default function Recent(){

    return (

        <div
        style={{
            margin: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        }}
    >
        {/* Project 1 */}
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-around',
                gap: '20px',
                
                padding: '20px',
                
            }}
        >
            <img
                src="/vite.svg"
                alt="Aquaculture"
                style={{
                    width: '40%',
                    height: 'auto',
                    borderRadius: '10px',
                }}
            />
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    Aquaculture Development Program
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', }}>
                    This program focuses on enhancing fish fingerling hatcheries and sea cage farming
                    techniques, ensuring increased fish production while minimizing environmental impact.
                </p>
            </div>
        </div>

        
        {/* Project 2 */}

        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '20px',
                
                padding: '20px',
               
            }}
        >
            <img
                src="/vite.svg"
                alt="Community Aquaponics Project"
                style={{
                    width: '40%',
                    height: 'auto',
                    borderRadius: '10px',
                }}
            />
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    Community Aquaponics Project
                </h3>
                <p style={{ fontSize: '1rem', color: '#333' }}>
                A transformative initiative that integrates fish farming with hydroponics, 
                providing fresh produce and fish to local communities while 
                promoting sustainable practices.
                </p>
            </div>
        </div>


        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '20px',
                
                padding: '20px',
               
            }}
        >
            <img
                src="/vite.svg"
                alt="BSF Waste Management"
                style={{
                    width: '50%',
                    height: 'auto',
                    borderRadius: '10px',
                }}
            />
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    BSF Waste Management System
                </h3>
                <p style={{ fontSize: '1rem', color: '#333' }}>
                    Our Black Soldier Fly (BSF) farming initiative transforms organic waste into high-quality
                    feed, promoting sustainable waste management while providing nutritional solutions for
                    aquaculture.
                </p>
            </div>
        </div>
    </div>
    )
}