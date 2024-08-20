import { promises as fs } from 'fs';

export default async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const fields = {};

    for (const line of lines.slice(1)) { // Skip the header line
      const [firstname, , , field] = line.split(',');

      if (firstname && field) { // Ensure both firstname and field are present
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    return fields;
  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
}
