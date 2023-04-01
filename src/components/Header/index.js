// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />

      <div className="list">
        <li className="space">Home</li>
        <li className="space">Products</li>
        <li className="space">Cart</li>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  </>
)
export default Header
