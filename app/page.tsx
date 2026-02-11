import { Header } from "@/components/shared/Header";
import Separator from "../components/shared/Separator";
import { Panel, PanelTitle, PanelTitleSup } from "@/components/shared/Panel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/shared/Footer";

export default async function Page() {
  return (
    <>
      <Panel>
        <PanelTitle>
          Welcome to the Interview Kit!
        </PanelTitle>

        <PanelTitleSup>
          Your one-stop solution for acing technical interviews.
        </PanelTitleSup>

        <div className="px-4 py-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            Access our curated collection of interview questions covering DSA, System Design, 
            Behavioral, and more. Filter by company, role, difficulty, and topic.
          </p>

          <div className="flex gap-2">
            <Button asChild>
              <Link href="/questions">Browse Questions</Link>
            </Button>
          </div>
        </div>
      </Panel>
      <Separator />
    </>
  );
}
