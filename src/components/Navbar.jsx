import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white-900 p-4 text-white grid grid-cols-3 items-center fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg ">
      <Link to="/" className="justify-self-start font-bold text-xl"><span className='text-red-200'>spot</span><span className='text-blue-500'>Hub/&gt;</span></Link>
      <div className='justify-self-center bg-blue-900 rounded-full px-4 py-2 shadow-lg background-blur-lg'>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/brand" className="mx-2">Brand</Link>
        <Link to="/design" className="mx-2">Design</Link>
        <Link to="/automate" className="mx-2">Automate</Link>
        <Link to="/build" className="mx-2">Build</Link>
        <Link to="/contact" className="mx-2">Contact</Link>
      </div>
      <div className='justify-self-end'>🥹</div>
    </nav>
  );
};

