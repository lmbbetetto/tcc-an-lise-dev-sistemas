import { ModeToggle } from '@/components/toggle-theme'
import Image from 'next/image'

export function HeaderLogin() {
    return (
        <section className='flex justify-between'>
            <div className='flex items-center gap-3 text-lg text-foreground'>
                <Image
                    src="/logo-cara.png"
                    alt="Logo Projeto CARA"
                    height={40}
                    width={40}
                />
                <span className='font-semibold'>Projeto CARA</span>
            </div>
            <ModeToggle />
        </section>
    )
}