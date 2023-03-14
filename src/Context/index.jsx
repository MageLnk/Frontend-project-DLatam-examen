// Providers
import MockupContext from "./MockupContext/Provider";
// Main App
import App from "../App";
// App
const AppProvider = () => {
  return (
    <MockupContext>
      <App />
    </MockupContext>
  );
};

export default AppProvider;
