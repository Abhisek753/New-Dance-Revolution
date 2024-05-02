import './App.css';
import Layout from './Layout/Layout';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Layout>
        <AllRoutes/>
      </Layout>
    </div>
  );
}

export default App;
