export const TableNoData = () => {
  return (
    <div className={"col-span-full text-center bg-white h-[627px] "}>
      <div className={"mt-[87px] mx-auto flex flex-col"}>
        <h2 className={"mt-10"}>No items found</h2>
        <h3 className={"mt-2"} color={"text-gray"}>
          No results <br />
          Try to enter something else
        </h3>
      </div>
    </div>
  )
}
