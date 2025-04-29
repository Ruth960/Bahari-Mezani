
export default function Projects(){

    return(
       <div>
            <div
                style={{
                    backgroundImage: "linear-gradient(to right,rgb(231, 158, 231),rgb(146, 11, 117))",
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
                    Transforming Communities Through Sustainable Practices </p>
            </div>

            <div >

                <h2 style={{ fontSize: '2rem', textAlign: 'center', margin: '20px 0' }}>
                    Current Sustainable Initiatives
                </h2>  
                <p style={{ fontSize: '1.2rem', textAlign:'center',  marginBottom: '2rem' }}>
                Empowering local communities through innovative agricultural and aquaculture projects. </p>
                <div style ={{
                    marigin: 10,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',


                }}>
                    <div style ={{
                    marigin: 10,
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'center',
                    }}>
                        <div>
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Ffish&psig=AOvVaw3aMJXYV_I33V1CrvIfdqis&ust=1746036364633000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNirmd7q_YwDFQAAAAAdAAAAABAE" alt="Aquaculture" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                        </div>
                       <div>
                            <h3 style={{ fontSize: '1.5rem', textAlign: 'center', margin: '20px 0' }}>
                            Aquaculture Development Program
                            </h3>
                            <p style={{ fontSize: '1rem', textAlign:'center', marginBottom: '2rem' }}>
                            This program focuses on enhancing fish fingerling hatcheries and sea cage farming 
                            techniques, ensuring increased fish production while minimizing environmental impact.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

       </div>
        

    )
}