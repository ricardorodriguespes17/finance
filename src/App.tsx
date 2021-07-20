import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";

import store from "./store";

import "./styles/colors.css";
import "./styles/global.css";

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
