import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    "px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-200",
    isActive
      ? "text-stone-900 border-b-2 border-[#5E86E4]"
      : "text-stone-500 border-b-2 border-transparent hover:text-stone-900 hover:border-[#9EB6F0]",
  ].join(" ");
  
const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 border-b-2 border-zinc-500 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="flex w-full items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-zinc-900">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
          
        <NavLink to="/auth/signin" className={navLinkClassName}>
          Sign In
        </NavLink>
        
      </div>
    </header>
  );
};

export default NavBar;
