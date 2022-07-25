import MyComponent from "./components/MyComponent";
import StoreProvider from "./store/StoreProvider";


function App() {
  return (
    <StoreProvider>
      <MyComponent />
    </StoreProvider>
    
  );
}

export default App;
