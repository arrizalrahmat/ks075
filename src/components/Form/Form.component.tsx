'use client';

import { addExpense } from '@/actions/addExpense';
import { useRef } from 'react';

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData: FormData) => {
        await addExpense(formData);
        ref.current?.reset();
      }}
      ref={ref}
    >
      <input
        type="text"
        placeholder="Insert your expense"
        name="expenseName"
      />
      <input
        type="text"
        placeholder="Insert the cost"
        name="expenseCost"
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
