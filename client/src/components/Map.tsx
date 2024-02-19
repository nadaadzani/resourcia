"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { PlacesAutoComplete } from "./PlaceAutoComplete";
import { useRouter } from "next/navigation";
import { getDistanceFromLatLonInKm } from "@/utils/map";
import { addPickupOrder } from "./action";
import Loading from "@/app/loading";

const url = process.env.NEXT_PUBLIC_API_URL as string;

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_APIKEY as string,
    libraries: ["places"],
  });
  const router = useRouter();
  const [center, setCenter] = useState({ lat: -6.8914747, lng: 107.6080842 });
  const [selected, setSelected] = useState<null | {
    lat: number | undefined;
    lng: number | undefined;
  }>(null);
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);

  const fetchMarker = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query GetLocation {
        getLocation {
          lat
          lng
        }
      }`,
      }),
    });
    const responseJson = await response.json();

    setMarkers(responseJson.data.getLocation);
  };

  const handleSubmit = async () => {
    let flag = false;
    markers.forEach((shop) => {
      const distanceKm = getDistanceFromLatLonInKm(
        Number(shop.lat),
        Number(shop.lng),
        selected?.lat,
        selected?.lng
      );
      console.log(distanceKm, "INI KM");

      if (distanceKm && distanceKm < 100) {
        flag = true;
      }
    });
    if (!flag) {
      router.replace("/donate?error=Selected Place Is too Far From Warehouse");
    } else {
      addPickupOrder(selected?.lat, selected?.lng);
    }
  };

  useEffect(() => {
    fetchMarker();
  }, []);
  return (
    <>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          <div className=" w-full h-full flex flex-col items-center">
            <GoogleMap
              zoom={15}
              center={center}
              mapContainerClassName=" w-[600px] max-md:w-[370px] h-[450px] border-0"
              onClick={(e) => {
                const lat = e.latLng?.lat();
                const lng = e.latLng?.lng();
                setSelected({ lat, lng });
              }}>
              {markers.length > 0 &&
                markers.map((marker) => {
                  return (
                    <>
                      <Marker
                        position={{
                          lat: Number(marker.lat),
                          lng: Number(marker.lng),
                        }}
                        label={{
                          text: `Resourcia Warehouse`, // Dynamic label with warehouse number
                        }}
                      />
                    </>
                  );
                })}
              {selected && (
                <Marker
                  position={{
                    lat: Number(selected.lat),
                    lng: Number(selected.lng),
                  }}
                  label="Selected here"
                />
              )}
            </GoogleMap>
            <PlacesAutoComplete
              setSelected={setSelected}
              setCenter={setCenter}
            />
            <button
              className="my-4 w-full hover:bg-white text-lg transition-all duration-200 hover:text-black hover:bg-[#1DE592] hover:border-black h-[50px] bg-black rounded-2xl text-white"
              onClick={handleSubmit}
              disabled={selected ? false : true}>
              Set Pickup
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Maps;
