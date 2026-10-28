// Макет для админ-панели. Боковое меню не перерисовывается
import Link from "next/link";

export function AdminPage({children}: {children: React.ReactNode}) {
    return(
        <div>
            <Link href='/admin'>Arrive to admin page</Link>
            <Link href='/admin/products'>Arrive to your products</Link>
            {children}
        </div>
    )
}