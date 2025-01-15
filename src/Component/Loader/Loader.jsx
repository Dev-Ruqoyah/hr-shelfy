const Loader = () => {
  return (
    <>
      <div className="text-center flex items-center h-screen justify-center py-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-supporting"></div>
        <p className="mt-4 text-supporting text-lg">Loading books...</p>
      </div>{" "}
    </>
  );
};

export default Loader;
