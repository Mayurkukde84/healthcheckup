import styled from "styled-components";
import "./App.css";
import RightSidebar from "./components/RightSidebar";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
      <RightSidebar />
     
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;

export default App;
