import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProductsPage from "./pages/Products";
import PublisherPage from "./pages/Publisher";
import ProfilePage from "./pages/Profile";

import Nav from "./components/Navigation/Nav";
import Search from "./components/Search/Search";
// import Pages from "./components/Pages/Pages";
// import Feed from "./components/Feed/Feed";
// import Header from "./components/Header/Header";
// import Headline from "./components/Headline/Headline";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Search />
          <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/publisher" element={<PublisherPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
