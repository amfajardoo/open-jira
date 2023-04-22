import './globals.css';
import Theme from './themes/theme';

export const metadata = {
  title: 'Open Jira',
  description:
    'Open Jira is an agile solution for managing software projects with ease and efficiency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
