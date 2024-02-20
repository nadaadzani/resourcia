import { handleLoginAdmin } from "./action";

const Page = () => {
  return (
    <>
      <section className="w-full h-screen bg-rose-600 flex items-center justify-center">
        <div className="w-96 h-96 bg-white rounded-2xl flex flex-col items-center">
          <h1 className="dm-sans font-bold text-3xl mt-4">Resourcia^</h1>
          <form
            className="flex flex-col mt-8 gap-4 items-center"
            action={handleLoginAdmin}
          >
            <div className="flex flex-col w-80 gap-1">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="your email.."
                name="email"
                className="pl-2 h-8 rounded-lg border border-gray-300"
              />
            </div>
            <div className="flex flex-col w-80 gap-1">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="your password.."
                name="password"
                className="pl-2 h-8 rounded-lg border border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-80 h-12 border border-black hover:bg-black hover:text-white rounded-xl hover:transition mt-4"
            >
              Log in
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
