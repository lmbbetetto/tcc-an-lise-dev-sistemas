import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { routes, routesProfessor } from "@/utils/routes";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MenuBar() {
    return (
        <main className="w-full h-[5rem] flex items-center justify-between pl-8 pr-8">
            <div>
                <Image alt="logo-cara.png" src="/logo-cara.png" width={130} height={130} className="mt-[5rem]" />
            </div>
            <div className="flex gap-2">
                <Link href={routes.auth.home}><Button>Login Gestor</Button></Link>
                <Link href={routesProfessor.auth.home}><Button>Login Professor</Button></Link>
                <ModeToggle />
            </div>
        </main>
    )
}