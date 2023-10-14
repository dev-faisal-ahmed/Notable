import { PiNotebookFill } from 'react-icons/pi';
import { Noto_Sans_Osage } from 'next/font/google';

const font = Noto_Sans_Osage({ weight: ['400'], subsets: ['latin'] });

export function Logo() {
  return (
    <div className='flex items-center gap-3'>
      <PiNotebookFill size={30} />
      <h1 className={`${font.className} text-2xl`}>Noteable</h1>
    </div>
  );
}
