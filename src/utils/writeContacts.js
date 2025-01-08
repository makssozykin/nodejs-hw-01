import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const newContact = await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts),
    );
    return newContact;
  } catch (error) {
    console.log('Помилка запису контакту: ', error);
  }
};
