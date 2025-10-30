'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';

import {
    MessageCircle,
    X,
    Send,
    Loader2,
    ArrowDownCircleIcon,
} from 'lucide-react';

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ChatWidget() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [input, setInput] = useState('');

    const { messages, sendMessage, status, error, stop } = useChat();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        sendMessage({ text: input });
        setInput('');
    };

    const toggleChat = () => setIsChatOpen((prev) => !prev);

    return (
        <div>
            {/* Floating Chat Icon */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-4 right-4 z-50"
            >
                <Button
                    onClick={toggleChat}
                    className="rounded-full p-4 shadow-lg bg-blue-600 hover:bg-blue-700 text-white size-14 flex items-center justify-center"
                >
                    {!isChatOpen ? (
                        <MessageCircle className="size-6" />
                    ) : (
                        <ArrowDownCircleIcon className="size-6" />
                    )}
                </Button>
            </motion.div>

            {/* Chat Box */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[420px]"
                    >
                        <Card className="border-2 border-zinc-200 shadow-xl rounded-2xl bg-white/95 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b">
                                <CardTitle className="text-lg font-bold text-zinc-800">
                                    SonyInterior AI Assistant
                                </CardTitle>
                                <Button
                                    onClick={toggleChat}
                                    size="sm"
                                    variant="ghost"
                                    className="rounded-full p-2 hover:bg-zinc-100"
                                >
                                    <X className="size-5 text-zinc-600" />
                                    <span className="sr-only">Close chat</span>
                                </Button>
                            </CardHeader>

                            <CardContent>
                                <ScrollArea className="h-[300px] pr-3">
                                    {error && (
                                        <div className="text-red-500 text-sm mb-2">
                                            {error.message}
                                        </div>
                                    )}

                                    {messages.length === 0 && (
                                        <div className="w-full text-center text-zinc-400 py-16">
                                            No messages yet. Start a conversation.
                                        </div>
                                    )}

                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`mb-3 ${message.role === 'user' ? 'text-right' : 'text-left'
                                                }`}
                                        >
                                            <div
                                                className={`inline-block px-3 py-2 rounded-2xl text-sm max-w-[85%] ${message.role === 'user'
                                                        ? 'bg-blue-600 text-white ml-auto'
                                                        : 'bg-zinc-100 text-zinc-800'
                                                    }`}
                                            >
                                                {message.parts.map((part, i) => {
                                                    if (part.type === "text") {
                                                        return (
                                                            <div key={i} className="whitespace-pre-wrap">
                                                                {part.text}
                                                            </div>
                                                        );
                                                    }

                                                    // Handle other types safely or skip
                                                    return null;
                                                })}

                                            </div>
                                        </div>
                                    ))}

                                    {(status === 'submitted' || status === 'streaming') && (
                                        <div className="flex items-center justify-start gap-2 mt-3 text-zinc-500">
                                            <Loader2 className="animate-spin size-4" />
                                            <span>AI is thinking...</span>
                                            <button
                                                onClick={stop}
                                                className="ml-auto text-xs underline text-red-500"
                                            >
                                                Stop
                                            </button>
                                        </div>
                                    )}
                                </ScrollArea>
                            </CardContent>

                            <CardFooter className="border-t pt-3">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex w-full items-center space-x-2"
                                >
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about furniture designs..."
                                        className="flex-1"
                                    />
                                    <Button
                                        type="submit"
                                        className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                                        disabled={status === 'submitted' || status === 'streaming'}
                                        size="icon"
                                    >
                                        <Send className="size-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
