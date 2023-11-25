import Header from './components/Header';
import ModeSwitch from './components/ModeSwitch';
import './globals.css';

export const metadata = {
  title: '이현수의 포트폴리오',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settingModeScript = `
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) 
  && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex overflow-auto bg-gradient-to-br from-backgroundBlue from-25% via-backgroundWhite via-60% to-backgroundBlue to-95% transition-background-color dark:bg-backgroundColor dark:bg-none">
        <script dangerouslySetInnerHTML={{ __html: settingModeScript }} />
        <Header />
        <main className="h-[calc(100%-64px)] w-full">{children}</main>
      </body>
    </html>
  );
}
