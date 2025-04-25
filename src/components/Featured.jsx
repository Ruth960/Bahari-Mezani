import ListCards from "./ListCards";
// import { fishListingsData } from "../../data";

export default function Featured() {
  return (
    <>
      {/* <div className="flex flex-col px-8 gap-4 my-16">
        <h1 className="text-4xl font-bold">Featured Fish Listings</h1>
        <div className="flex gap-8 mt-4 overflow-x-scroll items-center justify-center">
            <ListCards/>
            <ListCards/>
            <ListCards/>
            <ListCards/>
        </div>
      </div> */}
      <div className="flex flex-col px-8 gap-4 my-16">
        <h1 className="text-4xl font-bold">Featured Fish Listings</h1>
        <div className="flex gap-8 mt-4 overflow-x-scroll items-center justify-center">
           <ListCards/>
           <ListCards/>
           <ListCards/>
           <ListCards/>
        </div>
      </div>
    </>
  );
}