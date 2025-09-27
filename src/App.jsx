import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRouter";
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
