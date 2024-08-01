import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

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
