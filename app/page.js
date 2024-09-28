import { QueryClient } from "@tanstack/react-query";
import Header from "./_components/Header";
import SearchBar from "./_components/SearchBar";
const queryClient = new QueryClient();

export const metadata = {
  title: "Srdjan's Book Library",
  description: "Srdjan's Book Library practice project",
};

export default function Home() {
  return (
    <>
      <html lang="en">
        <body className="bg-[#B4B8AF]">
          <Header />
          <SearchBar />
        </body>
      </html>
    </>
  );
}
