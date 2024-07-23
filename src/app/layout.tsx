import ServerLayout from './ServerLayout';
import ClientLayout from './ClientLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServerLayout>
      <ClientLayout>
        {children}
      </ClientLayout>
    </ServerLayout>
  );
}
