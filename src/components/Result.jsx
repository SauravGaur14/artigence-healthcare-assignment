import ResultItem from "./ResultItem";

export default function Result() {
  return (
    <div className="p-5 pt-0 w-full h-screen pb-20 overflow-y-scroll bordeborder-yellow-500 rounded-lg shadow-md custom-scrollbar">
      <div className="flex items-center bg-neutral-800 justify-between w-full font-semibold border-l border-t border-r border-zinc-500 text-lg p-2 pb-4">
        <span className="w-1/3 truncate">RBC</span>
        <span className="w-1/3 truncate text-center">Count</span>
        <span className="w-1/3 truncate text-end">Percentage</span>
      </div>
      <div className="flex flex-col w-full">
        <ResultItem parameter="Angled Cells" count={222} percentage={67} />
        <ResultItem
          parameter="Borderline Ovalocytes"
          count={50}
          percentage={20}
        />
        <ResultItem parameter="Burr Cells" count={87} percentage={34} />
        <ResultItem parameter="Fragmented Cells" count={2} percentage={0.12} />
        <ResultItem parameter="Ovalocytes" />
        <ResultItem parameter="Rounded RBC" />
        <ResultItem parameter="Teardrops" />
      </div>
      <div className="flex items-center justify-between w-full font-semibold mt-8 border-l border-t border-r border-zinc-500 bg-neutral-800 p-2 pb-4 text-lg">
        <span className="w-1/3 truncate">WBC</span>
        <span className="w-1/3 truncate text-center">Count</span>
        <span className="w-1/3 truncate text-end">Percentage</span>
      </div>

      <div className="flex flex-col items-center justify-between w-full font-semibold mb-4">
        <ResultItem parameter={"Basophil"} count={222} percentage={67} />
        <ResultItem parameter={"Eosinophil"} count={50} percentage={20} />
        <ResultItem parameter={"Lymphocyte"} count={87} percentage={34} />
        <ResultItem parameter={"Monocyte"} count={2} percentage={0.12} />
      </div>

      <div className="flex items-center justify-center w-full font-semibold mt-8 border-l border-t border-r border-zinc-500 p-2 pb-4 truncate text-lg bg-neutral-800">
        Platelets
      </div>

      <div className="flex flex-col items-center justify-between w-full mb-4">
        <div className="flex w-full items-center justify-between">
          <span className="border border-zinc-500 w-1/2 p-2">Count</span>
          <span className="border border-zinc-500 w-1/2 p-2">222</span>
        </div>
        <div className="flex w-full justify-between items-center">
          <span className="border border-zinc-500 w-1/2 p-2">Count</span>
          <span className="border border-zinc-500 w-1/2 p-2">222</span>
        </div>
      </div>
    </div>
  );
}
