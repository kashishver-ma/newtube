interface Layoutprops {
  children: React.ReactNode;
}

const Layout = ({ children }: Layoutprops) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
