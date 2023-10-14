import { Heading } from './_components/heading';
import { Hero } from './_components/hero';

export default function LandingPage() {
  return (
    <section className='flex min-h-full flex-col'>
      <div className='flex flex-col items-center gap-y-8'>
        <Heading />
        <Hero />
      </div>
    </section>
  );
}
