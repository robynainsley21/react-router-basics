import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis itaque,
        aliquid blanditiis minima debitis provident numquam animi voluptatum est
        ea!
      </p>
      <p>Go to the <Link to="/">Home Page</Link>.</p>
    </div>
  );
};

export default NotFound;
