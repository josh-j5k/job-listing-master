interface listingInterface {
  id: Number;
  company: String;
  new: Boolean;
  featured: Boolean;
  position: String;
  role: String;
  level: String;
  postedAt: String;
  contract: String;
  location: String;
  languages: Array<string>;
  tools: Array<string>;
}

export default listingInterface;
