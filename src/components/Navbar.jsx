import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">spotHub/&gt;</Link>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/brand" className="mx-2">Brand</Link>
        <Link to="/design" className="mx-2">Design</Link>
        <Link to="/automate" className="mx-2">Automate</Link>
        <Link to="/build" className="mx-2">Build</Link>
        <Link to="/contact" className="mx-2">Contact</Link>
      </div>
    </nav>
  );
};

