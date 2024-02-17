import { Combobox } from "@headlessui/react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export const PlacesAutoComplete = ({
  setSelected,
  setCenter,
}: {
  setSelected: ({ lat, lng }: { lat: number; lng: number }) => void;
  setCenter: ({ lat, lng }: { lat: number; lng: number }) => void;
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "ID" },
    },
  });

  const handleSelect = async (address: string) => {
    console.log(address);

    setValue(address, false);
    clearSuggestions();
    const result = await getGeocode({ address });
    const { lat, lng } = getLatLng(result[0]);
    console.log(lat, lng);
    setCenter({ lat, lng });
    setSelected({ lat, lng });
  };
  return (
    <>
      <div className="mb-4 relative">
        <Combobox value={value} onChange={handleSelect}>
          <Combobox.Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            aria-disabled={!ready}
            placeholder="Search an address"
            className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <Combobox.Options className="absolute z-10 bg-white rounded-md border border-gray-300 w-full max-h-60 overflow-y-auto shadow-md">
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <Combobox.Option
                  key={place_id}
                  value={description}
                  className="cursor-pointer py-2 px-3 hover:bg-gray-100"
                >
                  {description}
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </Combobox>
      </div>
    </>
  );
};
