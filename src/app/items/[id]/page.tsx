'use client';
import { useParams } from 'next/navigation';
import { getItems } from '@/data/items';

const Item = () => {
  const { id } = useParams();
  const items = getItems();
  const item = items.find((el) => el.id === id);

  return (
    <div>
      <p className="title">This is Item Page</p>
      {item && <h5>Power: {item.power}</h5>}
    </div>
  );
};

export default Item;
