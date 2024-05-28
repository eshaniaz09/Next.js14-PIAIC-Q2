export default function ServicesLayout({children}:{children: string}) {
    return (
        <div>
            <h2 className="text-3xl text-red-700 font-bold">Company-services</h2>
            {children}
        </div>
    )
}