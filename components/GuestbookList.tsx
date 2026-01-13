import { prisma } from "@/lib/prisma";
import { Trash2 } from "lucide-react";

export default async function GuestbookList() {
    try {
        const rows = await prisma.guestbook.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 20
        });

        if (rows.length === 0) {
            return (
                <div className="text-center py-10">
                    <p className="text-gray-600 font-mono italic">
                        还没有留言... / No messages yet...
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                        快来抢沙发！ / Be the first one!
                    </p>
                </div>
            );
        }

        return (
            <>
                {rows.map((row) => (
                    <div
                        key={row.id}
                        className="group relative bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm hover:border-bocchi-pink/50 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-nijika-yellow font-mono text-sm">
                                {row.name}
                            </span>
                            <span className="text-xs text-gray-500 font-mono">
                                {new Date(row.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                            {row.message}
                        </p>

                        {/* Decoration */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                            <div className="w-2 h-2 bg-bocchi-pink rounded-full animate-pulse" />
                        </div>
                    </div>
                ))}
            </>
        );
    } catch (e) {
        return (
            <div className="p-4 border border-red-500/50 bg-red-500/10 rounded-lg text-red-400 text-sm font-mono">
                <p className="font-bold mb-2">Error: Database connection failed.</p>
                <p className="text-xs opacity-80">
                    请确认已执行 `npx prisma migrate dev --name init`
                </p>
            </div>
        );
    }
}
