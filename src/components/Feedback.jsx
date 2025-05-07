
export default function Feedback(){

    return (
        <div>
            <div style={{
                alignItems:'center',
                justifyContent:'center',
            }}>
                <h2 style={{fontSize: 28, fontWeight:'bold',  textAlign:'center', color:'black'}}> What Our Partners Says</h2>
                <p style={{
                    textAlign:'center',
                    color:'grey',
                    fontSize:'20',
                }}>Feedback that inspires and drives our mission forward.</p>
            </div>
            <div  style={{
                margin: '20px',
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
            }}>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
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
                John Kazungu, Local Fisherman
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', texteAlign:'center' }}>
                Bahari Mezani's support has transformed my fishing practices, 
                enabling me to fish sustainably while increasing my income. 
                Their training programs have been invaluable.
                </p>
            </div>
        </div>

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
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
                Sarah Polet., Community Leader
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', texteAlign:'center' }}>
                The projects led by Bahari Mezani have positively impacted our community, 
                providing us with the tools and knowledge to thrive sustainably. 
                We are grateful for their partnership.
                </p>
            </div>
        </div>

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
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
                Francis Obiri, Environmental Scientist
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', texteAlign:'center', }}>
                Bahari Mezani's commitment to innovation in sustainable practices is commendable. 
                Their projects are a model for how environmental conservation can align with community needs.
                </p>
            </div>
        </div>


            </div>
        </div>
    )
}
