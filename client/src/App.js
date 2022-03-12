import './App.css';
import logo from "./nasa_logo.png";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})
function App() {
  return (
    <div className="homepage">
      <img src={logo} alt="SpaceForce" style={{width: 300, display: 'block', margin: 'auto'}}/>
    </div>
  );
}

export default App;
