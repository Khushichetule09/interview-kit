import Chatbot from "@/components/main/chatbot";
import { Panel } from "@/components/shared/Panel";
import Separator from "@/components/shared/Separator";

export default function AIPage() {
  return (
    <>
    <Panel className="pt-16">
      <Chatbot />
    </Panel>
    <Separator/>
    </>
  )
}