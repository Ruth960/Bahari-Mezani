export default function ContactsUs() {
    return (
        <div style={{
            height: '100vh',
           
            
            
            
        }}>
            <div
                style={{
                    backgroundImage: "url('/images/ContactBg.PNG')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    padding:20,
                    height: 400,
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    
                    
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

            <div
                style={{
                    backgroundColor:'white',
                    color: 'black',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    padding:20,
                    alignItems: 'center',
                    
                }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Connect with Us
                </h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color:'grey', }}>
                Join our community on social media to stay updated on our projects and initiatives aimed at sustainable development.


                </p> 
                <button
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#0072ff',
                        color: 'white',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        display:'flex',
                        justifyContent:'center',
                    }}
                >
                    Follow Us
                </button> 

            </div>

            <div
                style={{
                    backgroundColor: 'rgb(71, 236, 236)',
                    color: 'black',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 20,
                    alignItems: 'center',
                }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Visit Us
                </h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'grey' }}>
                Discover where Bahari Mezani operates and learn how you can engage with our sustainable development efforts.
                   </p>

                   <div
    style={{
        
        color: 'black',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        
    }}
>
    <div style={{ flex: 1, padding: '10px' }}>
        <input
            type="text"
            placeholder="Name"
            style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                 backgroundColor:'white',
            }}
        />
        <input
            type="email"
            placeholder="Email"
            style={{
                width: '100%',
                backgroundColor:'white',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '1rem',
            }}
        />
        <textarea
            placeholder="Message"
            style={{
                width: '100%',
                backgroundColor:'white',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                resize: 'none',
                height: '100px',
            }}
        ></textarea>
        <button
            style={{
                width: '100',
                padding: '10px',
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
    <div style={{ flex: 1, padding: '10px' }}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31818.123456789!2d39.8499!3d-3.6104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840123456789abc%3A0x123456789abcdef!2sKilifi!5e0!3m2!1sen!2ske!4v1681234567890!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
       
    </div> 
    <div style={{ flex: 1, padding: '10px' }}>
         <p style={{  fontSize: '1rem', color: 'grey', textAlign:'left', }}>
            📍 KILIFI<br />
            🕒 Mon-Fri 10am-5pm, Sat 1pm-5pm<br />
            📞  +254 768 066569<br />
            📧 owialphonse2020@gmail.com
        </p>
    </div>

</div> 
            </div>

            


            

        </div>
    );
}