'use client';
import React from 'react';
import { useConvexAuth } from 'convex/react';
import { Spinner } from '@/components/ui/spinner';
import { Sidebar } from './_components/sidebar';
import { TopBar } from './_components/top-bar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <section className='h -full flex items-center justify-center'>
        <Spinner size={'lg'} />
      </section>
    );

  return (
    <section className='flex h-full dark:bg-[#1F1F1F]'>
      <Sidebar />
      <main className='h-full flex-1 overflow-y-auto'>
        <TopBar />
        {children}
      </main>
    </section>
  );
}
