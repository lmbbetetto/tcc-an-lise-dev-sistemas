import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import MenuBar from "./components/menu-bar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MenuBar />
      <main className="w-full h-full">
        <div className="p-8">
          {children}
        </div>
      </main>
      <Toaster />
    </>
  );
}
