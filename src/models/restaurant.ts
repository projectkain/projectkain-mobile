export class Restaurant {

  name: string;
  logo: string;
  id:   number;

  constructor(fields: { id: number, name: string, logo: string }) {
    const { id, name, logo } = fields;
    this.id   = id;
    this.name = name;
    this.logo = logo;
  }

}
