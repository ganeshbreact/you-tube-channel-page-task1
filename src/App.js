import logo from './logo.svg';
import './App.css';
import YoutubeCard from './YoutubeCard';
import Header from './Header';
import SideBar from './Sidebar';

function App() {
  return(
<div style={{
  display:"flex",
  flexDirection:"columns",
  // gap:"20px"
  
}}>
    <SideBar/>

    <div className="rightdiv"
    
    style={{
      width:"85vw"
    }}>
    <Header/>

  <div div style={{

    display:"flex",

    flexWrap:"wrap",
    gap:"10px",
  }}>

<YoutubeCard></YoutubeCard>
<YoutubeCard></YoutubeCard>
<YoutubeCard></YoutubeCard>
<YoutubeCard></YoutubeCard>
<YoutubeCard></YoutubeCard>
<YoutubeCard></YoutubeCard>
<YoutubeCard></YoutubeCard>
<YoutubeCard></YoutubeCard>


</div> 

    </div>

  

</div>);
}

export default App;
