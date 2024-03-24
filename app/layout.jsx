import "@/assests/styles/globals.css";

export const metadata = {
  title: "Stay Scanner | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ childern }) => {
  return (
    <html lang="en">
      <body>
        <div>{childern}</div>
      </body>
    </html>
  );
};

export default MainLayout;
