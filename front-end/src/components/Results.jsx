function Results({ loading, apiResponse }) {
  if (loading) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-12">
      {apiResponse?.error ? (
        <div>
          <h1 className="text-center text-4xl mb-8">Oh No!</h1>
          <p className="text-center text-xl">
            This monster sounds so scary, our team was too frightened to even
            try recreating it. Please refresh the page and try again!
          </p>
        </div>
      ) : (
        <>
          <img
            src={apiResponse?.result.data[0].url}
            alt="Generated image"
            className="w-5/6 max-w-96 mx-auto rounded-md mb-8"
          />
          <h1 className="text-center mb-4 text-4xl ">Wanted</h1>
          <p className="text-center text-xl">
            This monster was seen in your area!
          </p>
          <p className="text-center text-xl">
            (refresh the page if you'd like to report another.)
          </p>
        </>
      )}
    </div>
  );
}

export default Results;
