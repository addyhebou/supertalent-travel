export type Brand = {
  id: string;
  name: string;
  logoURL: string | null;
};

export type City = {
  id: string;
  name: string;
  countryCode: string;
  propertyCount: number;
};
