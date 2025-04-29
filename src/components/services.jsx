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
        <div style={{
            backgroundColor:"#E9D8A6",
        }}>
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
                    justifyContent: 'space-between',
                    padding: '20px',
                    backgroundColor: 'trasparent',
                    flexDirection:'row',
                    margin:10,
                    
                }}>
                    
                    <div style={{
                        width: '300px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        padding: 10,
                        margin:10,
                    }}>
                        <img 
                            src="/vite.svg" 
                            alt="Fish Fingerling Hatcheries" 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                        />
                        <h3 style={{ margin: 10, fontSize: 20, fontWeight:'bold'}}>Fish Fingerling Hatcheries</h3>
                        <p>Our hatcheries utilize advanced techniques to produce high-quality fish fingerlings, ensuring a sustainable supply for local aquaculture operations.</p>
                    </div> 
                    <div style={{
                        width: '300px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        padding: 10,
                        margin:10,
                    }}>
                        <img 
                            src="/vite.svg" 
                            alt="Sea Cage Farming" 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                        />
                        <h3 style={{ margin: 10, fontSize: 20, fontWeight:'bold'}}>Sea Cage Farming</h3>
                        <p>We implement cutting-edge sea cage farming methods that promote optimal growth conditions while minimizing environmental impact.</p>
                    </div>
                    <div style={{
                        width: '300px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        padding: 10,
                        margin:10,
                    }}>
                        <img 
                            src="/vite.svg" 
                            alt="Integrated Aquaculture Systems" 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                        />
                        <h3 style={{ margin: 10, fontSize: 20, fontWeight:'bold'}}>Integrated Aquaculture Systems</h3>
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
                    backgroundColor: 'transparent',
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

                <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: 'transparent',
            }}>
                <h1 style={titleStyle}>Consultation Services</h1>
                <p style={subtitleStyle}>Expert Guidance for Sustainable Practices</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '80%',
                }}>
                    <img 
                        src="https://via.placeholder.com/400x300" 
                        alt="Consultation Services" 
                        style={{ width: '50%', height: 'auto', borderRadius: '8px' }} 
                    />
                    <div style={{ padding: '20px', width: '50%' }}>
                        <h3 style={{ ...titleStyle, textAlign: 'left' }}>Sustainable Development Consultation</h3>
                        <p style={{ textAlign: 'left', color: 'grey' }}>
                            Our team of experts provides insights and strategies for implementing sustainable practices 
                            in agriculture and aquaculture, tailored to your specific needs.
                        </p>
                        <input 
                            type="datetime-local" 
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }} 
                        />
                        <p style={{ textAlign: 'left', color: 'grey', fontSize: '14px' }}>
                            Event time zone: Africa/Nairobi GMT+08:00
                        </p>
                        <button style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#0072ff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                margin: 10,
                backgroundColor: 'transparent',
            }}>
                <h1 style={titleStyle}>Service Packages</h1>
                <p style={subtitleStyle}>Flexible Solutions for Every Need</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '20px',
                    width: '100%',
                }}>
                    {/* Basic Package */}
                    <div style={{
                        width: '300px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        position: 'relative',
                    }}>
                        <img 
                            src="/path-to-basic-icon.svg" 
                            alt="Basic Package" 
                            style={{ width: '50px', marginBottom: '10px' }} 
                        />
                        <h3>Basic Package</h3>
                        <p style={{ color: 'grey', fontSize: '18px' }}>Ksh1500.00</p>
                        <button style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#ccc',
                            color: '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginBottom: '10px',
                        }}>
                            SELECT
                        </button>
                        <ul style={{ textAlign: 'left', color: 'grey', fontSize: '14px', padding: '0' }}>
                            <li>Initial consultation</li>
                            <li>Basic aquaculture advice</li>
                            <li>Introductory waste management strategies</li>
                        </ul>
                    </div>

                    {/* Standard Package */}
                    <div style={{
                        width: '300px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        position: 'relative',
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#0072ff',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                        }}>
                            Recommended
                        </div>
                        <img 
                            src="/path-to-standard-icon.svg" 
                            alt="Standard Package" 
                            style={{ width: '50px', marginBottom: '10px' }} 
                        />
                        <h3>Standard Package</h3>
                        <p style={{ color: 'grey', fontSize: '18px' }}>Ksh3000.00</p>
                        <button style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#ccc',
                            color: '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginBottom: '10px',
                        }}>
                            SELECT
                        </button>
                        <ul style={{ textAlign: 'left', color: 'grey', fontSize: '14px', padding: '0' }}>
                            <li>Comprehensive consultation</li>
                            <li>Detailed aquaculture planning</li>
                            <li>Advanced waste management solutions</li>
                            <li>Monthly follow-up sessions</li>
                        </ul>
                    </div>

                    {/* Premium Package */}
                    <div style={{
                        width: '300px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        position: 'relative',
                    }}>
                        <img 
                            src="/path-to-premium-icon.svg" 
                            alt="Premium Package" 
                            style={{ width: '50px', marginBottom: '10px' }} 
                        />
                        <h3>Premium Package</h3>
                        <p style={{ color: 'grey', fontSize: '18px' }}>Ksh5000.00</p>
                        <button style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#ccc',
                            color: '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginBottom: '10px',
                        }}>
                            SELECT
                        </button>
                        <ul style={{ textAlign: 'left', color: 'grey', fontSize: '14px', padding: '0' }}>
                            <li>Full-scale consultation services</li>
                            <li>Custom aquaculture and agricultural solutions</li>
                            <li>Ongoing support and monitoring</li>
                        </ul>
                    </div>
                </div>
            </div>

           
        
        </div>
    );
}
