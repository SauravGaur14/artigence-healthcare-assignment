import Image from "./components/Image";
import Result from "./components/Result";

const App = () => {
  return (
    <div className="h-screen overflow-hidden rounded-md border-red-500 border-2 flex-col flex w-full mx-auto p-6 pt-0">
      <div className="text-xl text-center p-3 mb-5 font-semibold">
        {new Date().toDateString()}
      </div>
      <div className="flex w-full">
        <div className="w-1/2 mr-1 h-full">
          <Result />
        </div>
        <div className="w-1/2 h-full">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default App;
