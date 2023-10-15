import { ChevronsLeft } from 'lucide-react';
import React, { useRef, ElementRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { uiData } from '@/data/uiData';

export function Sidebar() {
  const isResizing = useRef(false);
  const sidebarRef = useRef<ElementRef<'aside'>>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isResetting, setIsResetting] = useState(false);

  function handleMouseDown(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    event.preventDefault();
    event.stopPropagation();
    isResizing.current = true;

    document.addEventListener('mousemove', handleResizing);
    document.addEventListener('mouseup', handleLeaveMouse);
  }

  // this function is responsible for resizing the sidebar
  function handleResizing(event: MouseEvent) {
    if (!isResizing) return;
    let newWidth = event.clientX;

    if (newWidth < uiData.sidebarWidth.default)
      newWidth = uiData.sidebarWidth.default;
    else if (newWidth > uiData.sidebarWidth.max)
      newWidth = uiData.sidebarWidth.max;

    if (sidebarRef.current) sidebarRef.current.style.width = newWidth + 'px';
  }
  // clean up function
  function handleLeaveMouse(event: MouseEvent) {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResizing);
    document.removeEventListener('mouseup', handleLeaveMouse);
  }

  // handle default size
  function handleDefaultSize() {
    if (sidebarRef.current)
      sidebarRef.current.style.width = uiData.sidebarWidth.default + 'px';
  }

  return (
    <>
      {!isMobile && (
        <aside
          ref={sidebarRef}
          style={{ width: uiData.sidebarWidth.default }}
          className={cn(
            'group/sidebar relative z-[9999] flex h-full flex-col overflow-y-auto bg-secondary',
            isResetting && 'transition-all duration-300 ease-in-out',
          )}
        >
          <div className='flex items-center justify-between px-3 py-2'>
            <button
              className={cn(
                'rounded-md p-1 opacity-0 hover:bg-neutral-300 group-hover/sidebar:opacity-100',
                isMobile && 'opacity-100',
              )}
            >
              <ChevronsLeft className='h-5 w-5' />
            </button>
          </div>
          <div>
            <p>Action Items</p>
          </div>
          <div>
            <p>Documents</p>
          </div>
          <div
            onMouseDown={handleMouseDown}
            onClick={handleDefaultSize}
            className='group-hover/ sidebar:opacity-100 absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary/10 opacity-0 transition'
          />
        </aside>
      )}
    </>
  );
}
