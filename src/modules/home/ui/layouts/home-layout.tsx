import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "@/modules/home/ui/components/home-navbar";
import { HomeSideBar } from "@/modules/home/ui/components/home-navbar/home-sidebar";

interface layoutprops {
  children: React.ReactNode;
}

//named exports

export const HomeLayout = ({ children }: layoutprops) => {
  console.log("SidebarProvider:", SidebarProvider);

  return (
    <SidebarProvider>
      <div className="w-full ">
        <HomeNavBar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSideBar />
          <main className="flex-1 overflow-y-auto"> {children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
