export default function Services() {
    const titleStyle={
        fontSize: 28,
        fontWeight:'bold',
        textAlign:'center',
        color:'black'
    },
     subtitleStyle={
        textAlign:'center',
        color:'grey',
        fontSize:'20',

    }

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
                <h1 style={{...titleStyle, color:'white'}}>Our Services</h1>
                <p style={{ ...subtitleStyle, color: 'white' }}>Innovative Solutions for a Sustainable Future</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                       
                }}>
                    <h1 style={titleStyle}>Aqualculture Services</h1>
                    <p style={subtitleStyle}>Sustainable and Innovative Fish Farming Techniques</p>
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

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                       
                }}>
                    <h1 style={titleStyle}>Innovative Agriculture</h1>
                    <p style={subtitleStyle}>Transforming Farming For a Sustainable Future</p>
                </div>
            </div>


            <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '20px',
                    backgroundColor: '#fff',
                    flexDirection:'column', 
                    alignItems:'center',
                    
            }}>
                    
                    <div style={{
                        
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        margin: 10,
                        padding: 20,
                        justifyContent:'space-evenly',
                        display:'flex',
                        flexDirection:'row',
                        
                    }}>
                        <img 
                            src="/vite.svg" 
                            alt="Fish Fingerling Hatcheries" 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                        />
                        <div>
                            <h3 style={titleStyle}>Black Soldier Fly Farming</h3>
                            <p>We utilize BSF farming to convert organic waste into high-quality protein feed, promoting a circular economy and reducing waste disposal challenges.</p>
                        </div>
                    </div>

                    <div style={{
                        
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        margin: 10,
                        padding: 20,
                        justifyContent:'space-evenly',
                        display:'flex',
                        flexDirection:'row',
                        
                    }}>
                        <img 
                            src="/vite.svg" 
                            alt="Fish Fingerling Hatcheries" 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                        />
                        <div>
                            <h3 style={titleStyle}>Composting Techniques</h3>
                            <p>Our composting services transform organic waste into nutrient-rich compost, enhancing soil health and promoting sustainable agricultural practices.</p>
                        </div>
                    </div>

                    <div style={{
                        
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        margin: 10,
                        padding: 20,
                        justifyContent:'space-around',
                        display:'flex',
                        flexDirection:'row',
                        
                    }}>
                        <img 
                            src="/vite.svg" 
                            alt="Fish Fingerling Hatcheries" 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                        />
                        <div>
                            <h3 style={titleStyle}>Waste-to-Energy Solutions</h3>
                            <p>We develop waste-to-energy systems that convert organic waste into renewable energy, contributing to energy sustainability and reduced emissions.</p>
                        </div>
                    </div>
                    
                </div>



        </div>
    );
}
