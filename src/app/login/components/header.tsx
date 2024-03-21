import { Pizza } from "lucide-react";
import Image from 'next/image'

export function HeaderLogin() {
    return (
        <div className='flex items-center gap-3 text-lg text-foreground'>
            {/* <Pizza className='h-5 w-5' /> */}
            <Image
                    src="/logo-cara.png"
                    alt="Logo Projeto CARA"
                    height={40}
                    width={40}
            />
            <span className='font-semibold'>Projeto CARA</span>
        </div>
    )
}