import "./assets/General.css";
import "./assets/Event-Group-Inner.css";
import "./assets/Event-Group-Outer.css";

import Event from "./assets/Event.jsx";
import EventGroup from "./assets/Event-Group.jsx";

function App() {
  return(
      <>
          <div style={{padding: "2%"}}>
              <EventGroup />
              <EventGroup />
              <EventGroup />
          </div>
      </>
  );

}

export default App
