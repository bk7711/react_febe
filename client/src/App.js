import React from "react";
import Nav from "./components/Navigation/Nav";
import Search from "./components/Search/Search";
import Pages from "./components/Pages/Pages";
import Feed from "./components/Feed/Feed";
function App() {
  return (
    <div>
      <Nav />
      <Pages />
      <Search />
      <Feed />
    </div>
  );
}
export default App;
