import { Toaster } from "@/components/ui/toaster";
import Sidebar from "./components/Sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className="grid w-full h-full pl-[300px]">
        <div className="p-8">
          {children}
        </div>
      </main>
      <Toaster />
    </>
  );
}
