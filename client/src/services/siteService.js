import api from "./api";
import { sites } from "./data";

const siteService = {
  getSites: () => sites,
  getSiteById: (siteId) => sites.find((s) => s.id === siteId),
};

export default siteService;
