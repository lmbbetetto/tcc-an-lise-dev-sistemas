import { FooterLogin } from "./components/footer";
import { HeaderLogin } from "./components/header";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          <div className='grid min-h-screen grid-cols-2 antialiased'>
            <div className='flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground bg-login-background' />
            <div className='flex flex-col items-center justify-center relative'>
              <div className="absolute top-10 left-10">
                <HeaderLogin />
              </div>
              <main>
                {children}
              </main>
              <div className="absolute bottom-10 left-10">
                <FooterLogin />
              </div>
            </div>
          </div>
        </main>
        <Toaster />
      </body>
    </html >
  );
}
