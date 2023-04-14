import Navbar from "./Navbar"

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <p>Version: {process.env.REACT_APP_ENV}</p>
    <p>Test key: {process.env.REACT_APP_TEST_KEY}</p>
  </div>
)

export default Layout;