'use client';
import { useRouter } from "next/navigation";

export function AdminPage() {
    const router = useRouter();
    return(
        <div>
            <button onClick={() => router.push('/')}>Arrive to home</button>
        </div>
    )
}
