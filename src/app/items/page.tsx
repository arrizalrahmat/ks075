'use client';
import { getItems } from '@/data/items';
import { useRouter } from 'next/navigation';

const Items = () => {
  const items = getItems();
  const router = useRouter();
  return (
    <div>
      <h1>items</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id + i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button
                  onClick={() =>
                    router.push(`items/${item.id}`)
                  }
                >
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
