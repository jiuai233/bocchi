"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { submitGuestbookEntry } from "@/app/actions";
import { useRef } from "react";

export default function GuestbookForm() {
    const formRef = useRef<HTMLFormElement>(null);

    async function action(formData: FormData) {
        await submitGuestbookEntry(formData);
        formRef.current?.reset();
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-bocchi-pink/10 blur-[50px] rounded-full pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-rubik">
                <span className="text-kita-red">✍️</span>
                给乐队留言
            </h3>

            <form ref={formRef} action={action} className="space-y-4 relative z-10">
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="你的名字 / Name"
                        required
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bocchi-pink focus:ring-1 focus:ring-bocchi-pink transition-all font-mono text-sm"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="写下你想说的话... / Message..."
                        required
                        rows={3}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-ryo-blue focus:ring-1 focus:ring-ryo-blue transition-all font-mono text-sm resize-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-bocchi-pink to-kita-red hover:from-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 group"
                >
                    <span>发送 / Send</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </motion.div>
    );
}
