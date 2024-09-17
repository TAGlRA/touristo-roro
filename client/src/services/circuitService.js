import api from "./api";

const circuit = {
  id: "1",
  numberOfDays: 1,
  journeys: [
    {
      id: 1,
      sites: [
        {
          id: 1,
          city: "Paris",
          likes: 100,
          dislikes: 3,
          visited: false,
          liked: false,
          disliked: false,
          code_departement: 75,
          description: null,
          historical_context: null,
          importance: null,
          latitude: 48.877059,
          longitude: 2.329685,
          name: "Home Crack Code",
          type: null,
        },
        {
          id: 2,
          city: "Paris",
          code_departement: 69,
          likes: 100,
          dislikes: 3,
          liked: false,
          disliked: false,
          visited: false,
          description: "",
          historical_context: "Modern globalization",
          importance: 4.7,
          latitude: 45.758254,
          longitude: 4.834292,
          name: "Immeuble Dummy Fake",
          type: "monument",
        },
        {
          id: 3,
          city: "Paris",
          code_departement: 69,
          likes: 100,
          dislikes: 3,
          liked: false,
          disliked: false,
          visited: true,
          description: "",
          historical_context: "Modern globalization",
          importance: 4.7,
          latitude: 45.758254,
          longitude: 4.834292,
          name: "Jason Thumb duch",
          type: "monument",
        },
        {
          id: 3,
          city: "Paris",
          code_departement: 69,
          likes: 100,
          dislikes: 3,
          liked: false,
          disliked: false,
          visited: false,
          description: "",
          historical_context: "Modern globalization",
          importance: 4.7,
          latitude: 45.758254,
          longitude: 4.834292,
          name: "Zachary Zeus",
          type: "monument",
        },
      ],
    },
  ],
};

export const getCircuitById = (uuid) => circuit;
export const getCircuits = () => [circuit];
export const createCircuit = (search) => api.get(`/circuits?${search}`);

// department=75&numberOfDays=3&numberOfSitePerDay=3&latitude=48.877059&longitude=2.329685&city=Paris
