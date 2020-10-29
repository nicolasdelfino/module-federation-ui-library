import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { NavButton } from "team-ui/Components"

const Home = React.lazy(() => import("team-home/Home"));
const Catalog = React.lazy(() => import("team-ui/Catalog"));

const HomeRoute = () => (
  <React.Suspense fallback={<div />}>
    <Home />
  </React.Suspense>
);
const CatalogRoute = () => (
  <React.Suspense fallback={<div />}>
    <Catalog />
  </React.Suspense>
);

const NavLinks = ({ location }) => {
  const { pathname } = location;
  return (
    <div className="links">
      <Link to="/">
        <NavButton mR={20} navActive={pathname === '/'}>Home</NavButton>
      </Link>
      <Link to="/catalog" >
        <NavButton navActive={pathname === '/catalog'}>UI FRAGMENT CATALOG</NavButton>
      </Link>
    </div>
  )
}

const LinksWrapper = withRouter(NavLinks)

const Routes = () => {
  return (
  <Router>
      <nav>
        <LinksWrapper />
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomeRoute />
        </Route>
        <Route path="/catalog">
          <CatalogRoute />
        </Route>
      </Switch>
  </Router>)}

export default Routes;
