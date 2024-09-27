
import momoData from '../../assets/Data/menu/momo';
import MomoCard from './MomoCard';

const Momo = () => {
  const { category, items } = momoData[0] || { category: "No Category", items: [] }; // Safe default

  console.log('Momo Items:', items); // Debugging line to check items

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center">
        {items.length > 0 ? (
          items.map((item) => (
            <MomoCard
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <p>No items available</p> // Message for no items
        )}

      </div>
    </div>
  );
};

export default Momo;




