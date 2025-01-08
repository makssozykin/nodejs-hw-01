import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  for (let i = 0; i < number; i++) {
    const contacts = await readContacts();
    const generatedContacts = [...contacts, createFakeContact()];
    await writeContacts(generatedContacts);
  }
};

generateContacts(5);
