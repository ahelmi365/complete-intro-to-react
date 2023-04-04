import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "./SearchParams";
import Details from "./Details";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  console.log(queryClient.getQueryData());
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
          <Route></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
