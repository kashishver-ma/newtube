import { Sidebar } from "@/components/ui/sidebar";
import { SidebarContent } from "@/components/ui/sidebar";
import { MainSection } from "./main-section";
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "./personal-section";

export const HomeSideBar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none ">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator className="border border-gray-300 mx-4 px-5 " />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};
