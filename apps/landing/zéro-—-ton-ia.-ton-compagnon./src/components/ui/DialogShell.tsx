import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

interface DialogShellProps {
  children: ReactNode;
  isOpen: boolean;
  labelId: string;
  onClose: () => void;
}

export function DialogShell({ children, isOpen, labelId, onClose }: DialogShellProps) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <div aria-labelledby={labelId} aria-modal="true" className="dialog-panel" role="dialog">
        <button aria-label="Fermer" className="dialog-close" onClick={onClose} type="button">
          <X aria-hidden="true" size={19} />
        </button>
        {children}
      </div>
    </div>
  );
}
