import { useEffect } from "react";
import { useParams } from "react-router"


<BrowserRouter>
  <Router>
    <Route path="/collection/:storeId" element={<Chat/>}/>
    <Route path="/" element={<Chat/>}/>
  </Router>
</BrowserRouter>



const { storeId } = useParams();
const [roomName, setRoomName] = useState('')


useEffect(()=>{
   if(storeId){
    db.collection('collection').doc(storeId).onSnapShot(snapshot=>(
        setRoomName(snapshot.data().name)
    ))
   }
},[storeId])

{/* <Link to={`/collection/${id}`}>

</Link> */}



