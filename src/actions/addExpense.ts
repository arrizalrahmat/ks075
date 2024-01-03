'use server';
import axios from 'axios';
import { revalidatePath } from 'next/cache';

export const addExpense = async (formData: FormData) => {
  const expenseName = formData.get('expenseName');
  const expenseCost = formData.get('expenseCost');

  await axios.post('http://localhost:3000/expense', {
    id: Math.random(),
    name: expenseName,
    cost: Number(expenseCost),
  });

  revalidatePath('/expense');
};
