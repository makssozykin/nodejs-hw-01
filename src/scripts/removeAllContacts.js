import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  let contacts = await readContacts();
  contacts = [];
  await writeContacts(contacts);

  console.log('Всі контакти видалені успішно!');
  return contacts;
};

removeAllContacts();
