import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = await readContacts();
  contacts.length = 0;
  await writeContacts(contacts);

  console.log('Всі контакти видалені успішно!');
  return contacts;
};

removeAllContacts();
