import { Header } from "@/components/shared/Header";
import Separator from "../components/shared/Separator";
import { Panel, PanelTitle, PanelTitleSup } from "@/components/shared/Panel";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <Panel>
      <Header />
      </Panel>

      <Separator />

      <Panel>
        <PanelTitle>
          Welcome to the Interview Kit!
        </PanelTitle>

        <PanelTitleSup>
          Your one-stop solution for acing technical interviews.
        </PanelTitleSup>
      </Panel>

      <Separator />

    </div>
  );
}
