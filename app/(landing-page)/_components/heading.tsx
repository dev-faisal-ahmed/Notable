import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Heading() {
  return (
    <div className='max-w-3xl space-y-4 text-center'>
      <h1 className='text-3xl font-bold sm:text-4xl md:text-6xl'>
        Your wiki, docs, & projects. Together.{' '}
        <span className='underline'>Noteable</span>
      </h1>
      <h3 className='sm:text-xl'>
        Notable is the connected workspace where <br /> better faster work
        happens
      </h3>
      <Button>
        Enter Notable
        <ArrowRight className='ml-2' />
      </Button>
    </div>
  );
}
