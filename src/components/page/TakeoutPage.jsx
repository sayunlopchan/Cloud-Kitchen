import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const defaultCenter = {
  lat: 27.483272,  // Latitude for Siddharthanagar
  lng: 83.450820,  // Longitude for Siddharthanagar
};

// Example takeout locations (you can replace these with real ones)
const locations = [
  {
    lat: 27.483272,
    lng: 83.450820,
    name: 'Takeout Location 1'
  },
  {
    lat: 27.507715,
    lng: 83.453237,
    name: 'Takeout Location 2'
  },
  {
    lat: 27.496523,
    lng: 83.441438,
    name: 'Takeout Location 3'
  }
];

const TakeoutPage = () => {
  const cart = useSelector((state) => state.allCart.cart); // Access cart from Redux state
  const totalPrice = useSelector((state) => state.allCart.totalPrice); // Access totalPrice from Redux state
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  return (
    <div className="p-10 lg:py-5 lg:px-20 bg-clay">
      {/* Navigation */}
      <div className="flex items-center gap-2 pb-1 pl-5 text-2xl font-semibold ">
        <NavLink to={'/cart'}>CART</NavLink>
        &gt;
        <NavLink to={'#'} className={'text-colorRed'}>
          Takeout Location
        </NavLink>
      </div>
      {/* Navigation */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-3 p-2">
        {/* Title */}
        <h2 className="md:col-span-12 max-md:order-2 px-3 font-semibold text-lg">Takeout Location</h2>
        {/* Title */}

        {/* Map Container */}
        <div className="md:col-span-7 max-md:order-3 flex justify-center rounded-lg overflow-hidden">
          {/* Map */}
          <div className="h-[400px] w-full bg-gray-400">
            <LoadScript googleMapsApiKey="AIzaSyBT3dw4ffodbLOQYw0T1C-SFqPTyaojx9k">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={defaultCenter}
                zoom={12}
              >
                {/* Mark takeout locations */}
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    label={location.name}
                  />
                ))}

                {/* User's location if available */}
                {userLocation && (
                  <Marker
                    position={userLocation}
                    label="You"
                    icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                  />
                )}
              </GoogleMap>
            </LoadScript>
          </div>
          {/* Map */}
        </div>
        {/* Map Container */}

        {/* Summary */}
        <div className="md:col-span-5 max-md:order-1 border rounded-lg bg-white">
          <h2 className="text-xl lg:text-3xl text-center m-2 font-semibold">Order Summary</h2>

          {/* Loop through cart items */}
          <div className="p-5 h-[250px] overflow-y-scroll">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 mb-5">
                  <div className="w-20 h-20 bg-gray-400 rounded-lg overflow-hidden">
                    <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-sm">Rs. {item.price}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Loop through cart items */}

          {/* Total Price */}
          <div className="flex justify-between px-5 py-3 border-t-2">
            <h2 className="font-semibold">Total Price:</h2>
            <p>Rs. {totalPrice}</p>
          </div>
          {/* Total Price */}

          {/* Button */}
          <div className="w-full flex justify-center pb-2">
            <button className=" bg-black text-white px-28 py-2 rounded-lg hover:bg-[#151515] transition-colors duration-300">
              Order
            </button>
          </div>
          {/* Button */}
        </div>
        {/* Summary */}
      </div>
    </div>
  );
};

export default TakeoutPage;
