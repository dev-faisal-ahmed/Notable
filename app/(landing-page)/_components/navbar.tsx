'use client';
import { useConvexAuth } from 'convex/react';
import { SignUpButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { ModeToggle } from '@/components/ui/mode-toggle';

export function Navbar() {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <nav className={`dark:bg-[#1F1F1F] ${scrolled ? 'shadow-md' : ''}`}>
      <div className='container flex items-center justify-between py-4'>
        <Logo />
        <div className='flex items-center gap-5'>
          {!isLoading && !isAuthenticated && (
            <SignUpButton mode='modal'>
              <Button>Login</Button>
            </SignUpButton>
          )}
          <UserButton afterSignOutUrl='/' />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
