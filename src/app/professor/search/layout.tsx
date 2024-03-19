import Header from "@/components/Header";

export default function LayoutCreateTeacher({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-4">
            <Header />
            {children}
        </div>
    )
}