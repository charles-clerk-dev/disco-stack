import { SignedOut, SignedIn, SignIn } from "@clerk/remix";

const Index = () => {
  return (
    <div className="w-screen h-screen">
      <main className="flex items-center justify-center min-h-screen">
        <SignedOut>
          <section className="h-[50vh] w-[50vw]">
            <SignIn />
          </section>
        </SignedOut>
        <SignedIn>
          <h1 className="text-2xl text-blue-800">Hey</h1>
        </SignedIn>
      </main>
    </div>
  );
};

export default Index;
