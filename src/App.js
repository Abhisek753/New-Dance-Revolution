import './App.css';
import Layout from './Layout/Layout';
import AllRoutes from './routes/AllRoutes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "./globalStyle/Style.css"
function App() {
  return (
    <div className="App"   >
      <Layout>
        <AllRoutes/>
      </Layout>
    </div>
  );
}

export default App;
