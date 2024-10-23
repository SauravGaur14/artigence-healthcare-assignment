/* eslint-disable react/prop-types */
export default function ResultItem({
  parameter,
  count = "-",
  percentage = "-",
}) {
  return (
    <div className="flex border border-zinc-500 w-full items-center justify-between">
      <span className="p-2 w-1/3 truncate border-r border-zinc-500">{parameter}</span>
      <span className="text-center truncate p-2 w-1/3 border-r border-zinc-500">{count}</span>
      <span className="text-end truncate p-2 w-1/3">{percentage}</span>
    </div>
  );
}
