interface PageProps {
  params: { video: string }; // No Promise here
}

const Page = async ({ params }: PageProps) => {
  console.log("Params:", params);
  return (
    <div>
      <h1>I am ID: {params.video}</h1>
    </div>
  );
};

export default Page;
