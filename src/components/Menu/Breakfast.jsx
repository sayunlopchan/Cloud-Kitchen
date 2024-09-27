// components/Breakfast.js
import breakfast from '../../assets/Data/menu/breakfast';
import BreakfastCard from './BreakfastCard';

const Breakfast = () => {
  const { category, items } = breakfast[0] || { category: "No Category", items: [] }; // Safe default

  console.log(items); // Debugging: Check the items array

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center">
        {items.map((item) => (
          <BreakfastCard
            key={item.id} // Use a unique identifier
            {...item} // Spread the item properties
          />
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
