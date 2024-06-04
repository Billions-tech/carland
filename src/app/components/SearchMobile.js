import DataSelection from "./DataSelection";
import HourSelection from "./HourSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container   mx-auto">
        
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DataSelection />
          <HourSelection />
          
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] p-2 mx-auto">
              Search
            </button>
          </div>

        </div>
        
      </div>
    </div>
  );
}
