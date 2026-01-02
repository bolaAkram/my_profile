import { RouterProvider } from "react-router-dom";
import { Router } from "./routers/router";

function App() {
  return (
    <div className="font-firacode">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
