import { useEffect } from "react";
import ls from "@livesession/browser";

export function LiveSession({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        ls.init(import.meta.env.VITE_LIVESESSION_TRACK_ID || "YOUR_TRACK_ID")
        ls.newPageView()
    }, [])

    return children
}