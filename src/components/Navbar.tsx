import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-600 flex p-4 shadow-xl">
      <ul className="w-3/6 flex items-center">
        <li className="mr-6 text-sm text-white hover:text-gray-300">
          <Link to="/">Recent EP</Link>
        </li>
        <li className="mr-6 text-sm text-white hover:text-gray-300">
          <Link to="/popular">Popular</Link>
        </li>
      </ul>
      <div className="w-3/6 flex items-center justify-end">
        <p className="font-serif font-bold text-xl text-black hover:text-gray-900">Anime updates</p>
      </div>
    </nav>
  );
}