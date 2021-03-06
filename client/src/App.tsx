import React from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import Users from "./components/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import { setContext } from 'apollo-link-context';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Authenticated from "./components/Authenticated";
import Rooms from "./pages/Rooms";

const httpLink = new HttpLink({ uri: "http://localhost:4000" })
const authLink = setContext(async (req, { headers }) => {
	const token = localStorage.getItem("token")
	return {
		...headers,
		headers: {
			Authorization: token ? `Bearer ${token}` : null
		}
	}
})

const link = authLink.concat(httpLink as any)
const client = new ApolloClient({
	link: link as any,
	cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Authenticated>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/rooms">
              <Rooms/>
            </Route>
          </Authenticated>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
