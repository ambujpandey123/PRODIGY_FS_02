import "./globals.css";

export const metadata = {
  title: "Employee Management System",
  keywords: "employee, management, system, HR, human resources",
  description: "A comprehensive employee management system for HR professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
