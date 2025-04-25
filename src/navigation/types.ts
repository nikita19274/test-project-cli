export type RootStackParamList = {
  Home: undefined;
  StarshipDetails: {
    id: string;
    starship: {
      name: string;
      model: string;
    };
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
