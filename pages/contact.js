import Head from "next/head";
const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="bg-white h-3/5 lg:w-2/5 sm:w-4/5 mx-auto my-5 mb-6 p-5 shadow-lg rounded-lg">
        <h1 className="capitalize text-center text-3xl font-bold">
          contact us
        </h1>
        <form className="text-center mt-8">
          <input
            className="w-4/5 border h-12 pl-4 bg-gray-100 mt-5"
            type="text"
            placeholder="Enter your name"
          />
          <br />
          <input
            className="w-4/5 border h-12 pl-4 bg-gray-100 mt-5"
            type="text"
            placeholder="Enter your email"
          />
          <br />
          <textarea
            className="w-4/5 border h-44 pl-4 bg-gray-100 mt-5"
            type="text"
            placeholder="Enter your name"
          ></textarea>
          <br />
          <button className="ml-auto bg-yellow-500 py-2 px-10 mt-5 text-white font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
