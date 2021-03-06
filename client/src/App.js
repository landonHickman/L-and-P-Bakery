import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
// import Register from './pages/Register';
import Login from "./pages/Login";
import AboutPages from "./pages/AboutPages";
import FetchUser from "./components/FetchUser";
import CustomCakes from "./pages/CustomCakes";
import Menu from "./pages/Menu";
import LandingPage from "./pages/LandingPage";
import Editor1 from "./pages/Editor1";
import Editor2 from "./pages/Editor2";
import Editor3 from "./pages/Editor3";
import EditProduct from "./pages/EditProduct";
import Application from "./pages/Application";
import CreateProduct from "./pages/CreateProduct";
import ProductShow from "./pages/ProductShow";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <FetchUser>
        <NavBar />
        <Container fluid style={{padding: '0px'}}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/product_show" component={ProductShow} />
            <Route exact path="/about_pages" component={AboutPages} />
            <Route exact path="/application" component={Application} />
            <ProtectedRoute exact path="/editor1" component={Editor1} />
            <ProtectedRoute exact path="/editor2" component={Editor2} />
            <ProtectedRoute exact path="/editor3" component={Editor3} />
            <ProtectedRoute exact path="/createProduct" component={CreateProduct} />
            <Route exact path="/edit_product" component={EditProduct} />
            <Route exact path="/custom_cakes" component={CustomCakes} />
            <Route exact path="/menu" component={Menu} />
            {/* <Route exact path='/register' component={Register} /> */}
            <Route exact path="/admin" component={Login} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
