
React Router is a powerful library that enables navigation in React applications by allowing you to implement dynamic routing. It helps manage multiple views, components, and URLs, creating a single-page application (SPA) with various pages without reloading the browser.


Key Concepts of React Router:
BrowserRouter 

Routes

Route

Link

NavLink


difference between Link and NavLink
both <Link> and <NavLink> are used for navigation, but they serve slightly different purposes. The key difference between them is that <NavLink> provides additional styling or class functionality based on whether the link is active (i.e., matches the current URL).

Link:  <Link to="/about">About Us</Link>
Use Case  = Basic navigation
Active Styling = No automatic styling for active links
Customization = No special customization for active links


NavLink: <NavLink 
        to="/" 
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        Home
      </NavLink>
Use Case= Navigation with active link styling
Active Styling = Applies an active class by default, or a custom className can be used
Customization = Can customize styles or classes for active links



useNavigate: A hook that allows you to programmatically navigate between routes.
example:
const navigate = useNavigate();
navigate('/home');
