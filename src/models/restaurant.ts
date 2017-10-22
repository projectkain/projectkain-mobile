export class Restaurant {

  name: string;
  logo: string;
  id:   number;
  rank: any;

  constructor(fields: { id: number, name: string, logo: string, rank: any }) {
    const { id, name, logo, rank } = fields;

    this.id   = id;
    this.name = name;
    this.logo = logo;
    this.rank = rank;
  }

}
