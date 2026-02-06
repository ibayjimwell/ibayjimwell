import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import portfolioData from "./PortfolioData";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

const SYSTEM_PROMPT = `
You are Jimwell Ibay.
You speak in a calm, elegant, and formal tone.
Replies must be short and conversational.
Answer using the portfolio data.
Speak in first person.

PORTFOLIO DATA:
${JSON.stringify(portfolioData, null, 2)}
`;

/**
 * Try several known response shapes and return the first available text.
 * Keeps the UI resilient to SDK / API shape changes.
 */
function extractTextFromGenAIResponse(res) {
  // Defensive checks for common response shapes
  try {
    // SDK style: res.output[0].content[0].text
    const a = res?.output?.[0]?.content?.[0]?.text;
    if (a) return a;

    // SDK alternative: res.output[0].contentText
    const b = res?.output?.[0]?.contentText;
    if (b) return b;

    // Candidate style: res?.candidates[0]?.content[0]?.text
    const c = res?.candidates?.[0]?.content?.[0]?.text;
    if (c) return c;

    // Flat text property
    const d = res?.text || res?.responseText || res?.content;
    if (d) return d;

    // Newer SDK shape: res?.outputs?.[0]?.content?.[0]?.text
    const e = res?.outputs?.[0]?.content?.[0]?.text;
    if (e) return e;

    // Fallback to JSON stringified response (very last resort)
    return null;
  } catch (err) {
    return null;
  }
}

export default function ChatWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! You may ask about my work, skills, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Quick api-key guard
    if (!genAI) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Chat is not configured. Missing API key.",
        },
      ]);
      return;
    }

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Build a compact conversation history to provide context.
      const history = messages
        .slice(-8) // keep last few messages to limit size
        .map((m) => `${m.role === "user" ? "User" : "Jimwell"}: ${m.content}`)
        .join("\n");

      const prompt = `${SYSTEM_PROMPT}

      Conversation so far:
      ${history}

      User: ${userMessage.content}
      `;

      // Use a currently-supported free model.
      const modelName = "gemini-2.5-flash";

      // Generate content.
      const response = await genAI.models.generateContent({
        model: modelName,
        contents: [{ type: "text", text: prompt }],
      });

      // Extract text robustly from multiple possible response shapes
      const replyText = extractTextFromGenAIResponse(response);

      if (replyText) {
        // Trim and force short reply (ensure it's concise)
        const finalReply = replyText.trim().split("\n").slice(0, 6).join("\n"); // cap lines
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: finalReply },
        ]);
      } else {
        // If we didn't get a text, show friendly message and log the response
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.warn("Unexpected GenAI response shape:", response);
        }
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I’m currently unavailable. Please try again shortly.",
          },
        ]);
      }
    } catch (err) {
      // log for debugging in dev
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.error("GenAI error:", err);
      }
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I’m currently unavailable. Please try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-24 w-auto sm:w-96 max-h-[85vh] bg-white rounded-2xl shadow-2xl border flex flex-col z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="relative flex items-center justify-between p-4 bg-blue-600">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img src="profile-pic.png" className="w-10 h-10 rounded-xl" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold truncate">Jimwell Ibay</h3>
                <p className="text-xs text-blue-100">Available for discussion</p>
              </div>
            </div>
            <button onClick={onClose} className="hover:bg-blue-700 p-1 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          {/* Changed max-h-80 to flex-1 with overflow-y-auto to fill available modal height */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-white min-h-[300px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm md:text-base max-w-[85%] ${
                    m.role === "user" 
                    ? "bg-blue-600 text-white rounded-tr-none shadow-sm" 
                    : "bg-slate-100 text-slate-700 rounded-tl-none border border-slate-200"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Loader2 className="animate-spin w-4 h-4" /> Jimwell is typing…
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-slate-50">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my work…"
                className="flex-1 px-4 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 rounded-xl disabled:opacity-50 hover:bg-blue-700 transition-colors shrink-0"
                disabled={isLoading || !input.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
