

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {DefaultLayout} from "./Component/Layout";
import {publicRoutes} from "./Routes/"
import { Fragment } from "react";
function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
          
          {publicRoutes.map((route, index) => {
                       const Page = route.component;
                        const Layout = route.layout=== null? Fragment : DefaultLayout;


                        return (
                            <Route
                            key={index}
                            path={route.path}
                            element={
                              <Layout>
                                <Page />
                              </Layout>
                            }
                            />
                        );
                    })}
        </Routes>
        </div>
    </Router>
  
  );
}

export default App;
