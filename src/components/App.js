import '../styles/App.css'
import Home from './pages/Home'
import Layout from './Layout'
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <SignUp />
      </Layout>
    </div>
  );
}

export default App;
