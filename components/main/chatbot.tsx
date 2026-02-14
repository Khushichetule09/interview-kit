"use client";

import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
  PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Spinner } from "@/components/ui/spinner";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { useCallback, useState } from "react";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";

const MessageParts = ({
  message,
  isLastMessage,
  isStreaming,
}: {
  message: UIMessage;
  isLastMessage: boolean;
  isStreaming: boolean;
}) => {
  // Consolidate all reasoning parts into one block
  const reasoningParts = message.parts.filter(
    (part) => part.type === "reasoning"
  );
  const reasoningText = reasoningParts.map((part) => part.text).join("\n\n");
  const hasReasoning = reasoningParts.length > 0;

  // Check if reasoning is still streaming (last part is reasoning on last message)
  const lastPart = message.parts.at(-1);
  const isReasoningStreaming =
    isLastMessage && isStreaming && lastPart?.type === "reasoning";

  return (
    <>
      {hasReasoning && (
        <Reasoning className="w-full" isStreaming={isReasoningStreaming}>
          <ReasoningTrigger />
          <ReasoningContent>{reasoningText}</ReasoningContent>
        </Reasoning>
      )}
      {message.parts.map((part, i) => {
        if (part.type === "text") {
          return (
            <MessageResponse key={`${message.id}-${i}`}>
              {part.text}
            </MessageResponse>
          );
        }
        return null;
      })}
    </>
  );
};

const Chatbot = () => {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   sendMessage({ text: input });
  //   setInput("");
  // };

  const handleSubmit = useCallback(
    (message: PromptInputMessage) => {
      sendMessage({ text: message.text });
      setInput("");
    },
    [sendMessage]
  );

  const isStreaming = status === "streaming";

  return (
    <div className="relative flex size-full flex-col divide-y overflow-hidden min-h-[80vh]">
      <Conversation>
        <ConversationContent>
          {messages.map((message, index) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                <MessageParts
                  message={message}
                  isLastMessage={index === messages.length - 1}
                  isStreaming={isStreaming}
                />
              </MessageContent>
            </Message>
          ))}
          {status === "submitted" && <Spinner />}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="grid shrink-0 gap-4 pt-4">
        <PromptInput
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Say something..."
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={isStreaming ? "streaming" : "ready"}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </PromptInput>
      </div>
    </div>
  );
};

export default Chatbot;