import Form from '@/components/Form/Form.component';
import axios from 'axios';

const Expense = async () => {
  const { data } = await axios.get(
    'http://localhost:3000/expense'
  );

  return (
    <div>
      <p>Expense:</p>
      <Form />
      <table border={1}>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el: any, i: number) => (
              <tr key={el.id + i}>
                <td>{el.name}</td>
                <td>${el.cost}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expense;
