import Component from "./Component";
import { StoreProvider } from "./context";

function App() {
  return (
    <>
      <h1>Using default store</h1>
      <Component />
      <Component />
      <StoreProvider initialState={{ count: 10 }}>
        <h1>Using store provider</h1>
        <Component />
        <Component />
        <StoreProvider initialState={{ count: 20 }}>
          <h1>Using inner store provider</h1>
          <Component />
          <Component />
        </StoreProvider>
      </StoreProvider>
    </>
  );
}

export default App;
