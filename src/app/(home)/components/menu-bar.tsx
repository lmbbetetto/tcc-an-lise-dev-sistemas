import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { routes, routesProfessor } from "@/utils/routes";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function MenuBar() {
    return (
        <main className="w-full h-[5rem] border flex items-center justify-between pl-8 pr-8">
            <h1>Projeto CARA</h1>
            <div className="flex gap-2">
                <Link href={routes.auth.home}><Button>Login Gestor</Button></Link>
                <Link href={routesProfessor.auth.home}><Button>Login Professor</Button></Link>
                <ModeToggle />
            </div>
        </main>
    )
}