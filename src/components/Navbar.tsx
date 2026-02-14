import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ["Game", "Shop", "Prologue", "About", "Contact"];

export default function Navbar() {
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    }
    else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    }
    else {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);

  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 h-16 z-50 transition-all border-none duration-700 sm:inset-x-6">
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
          <div className="flex items-center gap-7">
            <img src="/img/logo.webp" alt="logo" className='md:w-30 w-15' />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<ArrowUpRight />}
              containerClass="bg-blue-200 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className='flex h-full items-center'>
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
