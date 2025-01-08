import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const dataContacts = await fs.readFile(PATH_DB);
    console.log(dataContacts);
    return JSON.parse(dataContacts);
  } catch (error) {
    console.log('Помилка читання файлу: ', error);
  }
};
