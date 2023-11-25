import { useEffect, useState } from 'react';
import { RsLogo } from 'icons';
import { useWindowSize } from 'hooks';

type NavItemProps = {
  label: string;
  href: string;
  toggleMenu: () => void;
};

type Color = 'gray' | 'none' | 'white';

const NavItem = ({ label, href, toggleMenu }: NavItemProps) => {
  const { width } = useWindowSize();

  const toggle = () => {
    if (!width || width > 810) {
      return;
    }

    toggleMenu();
  };

  return (
    <a className="menu-item" href={`#${href}`} onClick={toggle}>
      <div className="label">{label}</div>
    </a>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState<Color>('gray');

  const listenScrollEvent = () => {
    if (window.scrollY <= 64) {
      setColor('gray');
    } else if (window.scrollY > 64 && window.scrollY < 800) {
      setColor('none');
    } else if (window.scrollY >= 800) {
      setColor('white');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => window.scrollTo({ top: 0 });

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={`navbar ${color}`}>
      <div className="logo-container" onClick={scrollToTop}>
        <RsLogo />
      </div>
      <menu className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo-container" onClick={scrollToTop}>
          <RsLogo />
        </div>
        <NavItem label="About" href="about" toggleMenu={toggleMenu} />
        <NavItem label="RS School" href="school" toggleMenu={toggleMenu} />
        <NavItem label="Events" href="events" toggleMenu={toggleMenu} />
        <NavItem label="Community" href="community" toggleMenu={toggleMenu} />
        <NavItem label="Merch" href="merch" toggleMenu={toggleMenu} />
      </menu>
      <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="top" />
        <div className="mid" />
        <div className="bottom" />
      </div>
    </div>
  );
};
