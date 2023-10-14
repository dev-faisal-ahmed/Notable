'use client';
import { useConvexAuth } from 'convex/react';
import { SignInButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';

export function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className='mt-14 max-w-3xl space-y-4 text-center'>
      <h1 className='text-3xl font-bold sm:text-4xl md:text-6xl'>
        Your wiki, docs, & projects. Together.{' '}
        <span className='underline'>Noteable</span>
      </h1>
      <h3 className='sm:text-xl'>
        Notable is the connected workspace where <br /> better faster work
        happens
      </h3>
      {isLoading && (
        <div className='flex w-full items-start justify-center'>
          <Spinner />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Enter Notable
            <ArrowRight className='ml-2' />
          </Button>
        </SignInButton>
      )}
      {isAuthenticated && (
        <Button>
          <Link className='flex items-center gap-2' href={'/documents'}>
            Enter Noteable <ArrowRight className='h-4 w-4' />
          </Link>
        </Button>
      )}
    </div>
  );
}
