function Results({ loading, apiResponse }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(apiResponse);

  if (apiResponse?.error) {
    return (
      <div>
        <h1>Oh No!</h1>
        <p>
          This monster sounds so scary, our team was too frightened to even try
          recreating it. Please refresh the page and try again!
        </p>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-12">
      <img
        src={apiResponse?.result.data[0].url}
        alt="Generated image"
        className="w-5/6 max-w-96 mx-auto rounded-md mb-8"
      />
      <h1 className="text-center mb-4 ">Wanted</h1>
      <p>This monster was seen in your area!</p>
    </div>
  );
}

export default Results;
