import './styles/global.css'
import Login from './views/Login';
import UserProvider from './store/userContext'

function App() {
  return (
    <UserProvider>
      <Login/>
    </UserProvider>
  );
}

export default App;
