function SideBar(){

    return (

        <div style={{
            height:"100vh",
            position:"sticky",
            top:"0px"


        }} >

        <div className="1"
        style={{
            
            height:"30vh",
            display:"flex",
            justifyContent:"space-evenly"

        }}>
        <ul style={{
            display:"flex",
            flexDirection:"column",
            gap:"20px"
        }}>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>

        </div>
    
            <div className="2"
            style={{
                height:"30vh" ,
                display:"flex",
                flexDirection:"Columns",
                flexWrap:"wrap",
            justifyContent:"space-evenly"
            }}>
            <u1 style={{
            display:"flex",
            flexDirection:"column",
            gap:"20px"
        }}>
                <li>History</li>
                <li>Playlists</li>
                <li>Watch later</li>
                <li>Liked Videos</li>
            </u1>

            </div>

            <br />
            <br />
            

        <div className="3"
        style={{
            
            height:"30vh"
        }}>
        <u1 style={{
            display:"flex",
            flexDirection:"column",
            gap:"20px",
            

        }}>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Videos</li>
            </u1>

        </div>
            
        </div>

    );
    
}

export default SideBar;