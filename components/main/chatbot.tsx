"use client";

import { useChat } from "@ai-sdk/react";
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
  Message,
  MessageAction,
  MessageActions,
  MessageAttachment,
  MessageAttachments,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { Fragment, useCallback, useEffect, useRef } from "react";
import { CopyIcon, Loader, RefreshCcwIcon, Sparkles } from "lucide-react";
import { UIMessage } from "ai";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputMessage,
  PromptInputProvider,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "../ai-elements/shimmer";
import { useTheme } from "next-themes";

export default function Chatbot({
  initialMessages,
}: {
  initialMessages?: UIMessage[];
}) {
  const initialMessageSentRef = useRef(false);
  const { theme } = useTheme();
  console.log("Current theme in Chatbot:", theme);
  const { status, messages, sendMessage, regenerate } = useChat();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    (message: PromptInputMessage) => {
      if (!message.text || status === "streaming" || status === "submitted")
        return;
      sendMessage({ text: message.text });
    },
    [sendMessage, status],
  );

  useEffect(() => {
    if (
      (!initialMessages || initialMessages.length === 0) &&
      !initialMessageSentRef.current
    ) {
      const initialMessage = sessionStorage.getItem(`initial_message`);
      if (initialMessage) {
        sessionStorage.removeItem(`initial_message`);

        initialMessageSentRef.current = true;
        setTimeout(() => {
          sendMessage({
            role: "user",
            parts: [{ type: "text", text: initialMessage }],
          });
        }, 50); // Reduced timeout for faster response
      }
    }
  }, [initialMessages, sendMessage]);

  useEffect(() => {
    if (status === "ready") {
      textareaRef?.current?.focus();
    }
  }, [status, textareaRef]);

  return (
    <div className="relative flex size-full flex-col divide-y overflow-hidden min-h-[90vh] max-h-[90vh]">
      <Conversation className="w-full h-full overflow-y-auto!">
        <ConversationContent className="gap-2 mt-4">
          {messages.map((message, messageIndex) => {
            return (
              <Fragment key={message.id}>
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "file":
                      return (
                        <Message from={message.role}>
                          <MessageAttachments className="mb-2">
                            <MessageAttachment data={part} key={part.url} />
                          </MessageAttachments>
                        </Message>
                      );
                    case "text":
                      const isLastMessage =
                        messageIndex === messages.length - 1;
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message from={message.role}>
                            <MessageContent>
                              <MessageResponse theme={theme}>
                                {part.text}
                              </MessageResponse>
                            </MessageContent>
                          </Message>
                          {message.role === "assistant" && isLastMessage && (
                            <MessageActions>
                              <MessageAction
                                onClick={() => regenerate()}
                                label="Retry"
                              >
                                <RefreshCcwIcon className="size-3" />
                              </MessageAction>
                              <MessageAction
                                onClick={() =>
                                  navigator.clipboard.writeText(part.text)
                                }
                                label="Copy"
                              >
                                <CopyIcon className="size-3" />
                              </MessageAction>
                            </MessageActions>
                          )}
                        </Fragment>
                      );
                    case "reasoning":
                      return (
                        <Reasoning
                          key={`${message.id}-${i}`}
                          className="w-full"
                          isStreaming={
                            status === "streaming" &&
                            i === message.parts.length - 1 &&
                            message.id === messages.at(-1)?.id
                          }
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    default:
                      return null;
                  }
                })}
              </Fragment>
            );
          })}
          {status === "submitted" && (
            <div className="flex items-center gap-1">
              <Loader className="animate-spin size-4" />
              <Shimmer className="text-sm" duration={1.5}>
                Generating
              </Shimmer>
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="grid shrink-0 gap-4">
        <div className="mx-auto w-full max-w-2xl px-2 py-2">
          <div className="shadow-primary/20 shadow-2xl relative">
            <div className="flex flex-col border bg-linear-to-b from-secondary/40 to-background p-2 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent to-transparent via-primary pointer-events-none select-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-linear-to-r from-transparent to-transparent via-primary pointer-events-none select-none blur-2xl"></div>
              <PromptInputProvider>
                <PromptInput
                  globalDrop
                  multiple
                  onSubmit={handleSubmit}
                  className=" w-full outline-none! resize-none text-sm border-0! p-0! bg-transparent! max-h-32!"
                >
                  <PromptInputBody>
                    <PromptInputTextarea
                      className="p-0! outline-none! resize-none! text-sm! border-0!"
                      ref={textareaRef}
                      placeholder="Type your message..."
                    />
                  </PromptInputBody>
                  <PromptInputFooter className="p-0!">
                    <PromptInputTools>
                      <PromptInputSpeechButton textareaRef={textareaRef} />
                    </PromptInputTools>

                    <div className="flex gap-2">
                      <PromptInputButton size="sm">
                        <Sparkles />
                      </PromptInputButton>
                      <PromptInputSubmit status={status} />
                    </div>
                  </PromptInputFooter>
                </PromptInput>
              </PromptInputProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
