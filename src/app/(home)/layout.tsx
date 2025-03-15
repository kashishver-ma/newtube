import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

interface layoutprops {
  children: React.ReactNode;
}

const layout = ({ children }: layoutprops) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default layout;
