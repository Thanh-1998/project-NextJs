import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full justify-center flex-col">
      <h1 className="heading text-center">
        Project code NextJs
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Description app</span>
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <Feed />
    </section>
  );
}

export default Home;