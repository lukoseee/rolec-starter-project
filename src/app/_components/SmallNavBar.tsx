
// components/ScopedNavigation.tsx
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';


type NavProps = {children: ReactNode;}

// Dynamically import Navigation with CSS only loaded for this component
const Navigator = dynamic( () => import('@Rolec-Services/rolec-ui').then((mod) => {
    // Import CSS only once
    if (typeof window === 'undefined') {
      require('@Rolec-Services/rolec-ui/dist/style.css');
    }
    return mod.Navigation;
  }),
);

export default function ScopedNavigation({ children }: NavProps) {
  return <Navigator className="gap-2">{children}</Navigator>;
}