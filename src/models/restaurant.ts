export class Restaurant {

  name: string;
  logo: string;
  id: number;
  rank: any;
  location: string;
  phone: string;

  constructor(fields: { id: number, name: string, logo: string, rank: any, location: string, phone: string }) {
    const { id, name, logo, rank, location, phone } = fields;

    this.id = id;
    this.name = name;
    this.logo = logo;
    this.rank = rank;
    this.location = location;
    this.phone = phone;
  }

}
