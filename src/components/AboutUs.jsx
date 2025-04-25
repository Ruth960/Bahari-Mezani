import React from 'react';

export default function AboutUs(){

  return(
    <div>
      <div style={{
        color:'white', alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column', height:'400px', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpc2glMjBpbWFnZXxlbnwwfHx8fDE2OTI3NTY1NzE&ixlib=rb-4.0.3&q=80&w=1080)', 
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <h1 style={{fontSizee:'48px', fontWeight:'bold', padding: 10,}}>Welcome to Bahari Mezani</h1>
        <p>Innovative solution for sustainable Development</p>
      </div>
      <div style ={{alignItems:'center',
        justifyContent:'center',
        display:'flex', flexDirection:'column', padding: 20,
      }}>


        <h1 style={{fontSize:'48px', fontWeight:'bold', padding: 10,}}>Our Journey Begins</h1>
        <p style={{color:'grey', padding:10, }}>From vision to reality</p>
      </div >  
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', padding: 20, margin: 10}}>
        <img placeholder='aquaculture' src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFxdWFjdWx0dXJlJTIwaW1hZ2V8ZW58MHx8fHwxNjkyNzU2NTcx&ixlib=rb-4.0.3&q=80&w=1080' alt='aquaculture' style={{width:'100%', height:'400px'}}/>
        <div>
          <h1 style={{fontWeight:'bold', fontSize: 28, }}>Empowerment Through Sustainability</h1>
          <p>At Bahari Mezani, we believe in empowering communities by integrating sustainable practices in agriculture and aquaculture. Our mission is to create innovative solutions that not only support economic growth but also protect the environment</p>
          <button> Learn More</button>
        </div>

      </div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', padding: 20, margin: 10}}>
        <h1 style={{fontSize: 28, textAlign:'center', fontWeight:'bold', }}>Meet Our Team</h1>
        <p>Passionate Innovators for a Sustainable Future</p>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', padding: 20}}>
          <div style={{width: '200px', height: '200px',  display:'flex', flexDirection:'column',
             alignItems:'center', justifyContent:'center'}}>
            <img src='public/images/alimg.jpg' alt='team member' style={{ width: '300px', height: '300px'}}/>
            <h2> Alphonce Owiti</h2>
            <p>As the founder and CEO, Alphonce Owiti brings over 15 years of experience in sustainable development. 
              His expertise in aquaculture and environmental science drives the strategic vision of Bahari Mezani.</p>
          </div>
          <div style={{width: '200px', height: '200px',  display:'flex',flexDirection:'column',
             alignItems:'center', justifyContent:'center'}}>
          <img src='public/images/alimg.jpg' alt='team member' style={{width: '300px', height: '300px'}}/>
            <h2>Mr. Juma Karanja</h2>
            <p> Mr. Karanja serves as the Operations Manager, overseeing the implementation of our innovative practices. 
              His background in fisheries management ensures that our projects align with both community needs and environmental goals.</p>
          </div>
          <div style={{width: '200px', height: '200px',  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <img src='public/images/alimg.jpg' alt='team member' style={{ width: '300px', height: '300px'}}/>
            <h2>Ms. Fatima Ali</h2>
            <p>As the Community Engagement Officer, Ms. Ali plays a crucial role in building relationships with local stakeholders. 
              Her passion for community development helps Bahari Mezani remain responsive to the needs of those we serve.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
