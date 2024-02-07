import { apiEndPoints } from "../../configs/environments";
import { BeerStructure } from "../../interfaces/beersInterfaces";
import customRequest from "../../utils/customRequest";

export interface CustomResponseStructure {
  success: boolean;
  data?: unknown;
  error?: string;
}

export async function getRandomBeerService(): Promise<{
  success: boolean;
  data?: BeerStructure;
  error?: string;
}> {
  const { data, error, success } = await customRequest(
    apiEndPoints.getRandomBeer,
    {
      method: "GET",
    },
  );
  if (success) {
    return { success, data: (data as BeerStructure[])[0] };
  }

  return { error, success };
}
export async function getRandomNonAlcoholicBeerService(): Promise<{
  success: boolean;
  data?: BeerStructure;
  error?: string;
}> {
  const { data, error, success } = await customRequest(
    apiEndPoints.getRandomNonAlcoholicBeer,
    {
      method: "GET",
    },
  );
  if (success) {
    return { success, data: (data as BeerStructure[])[0] };
  }

  return { error, success };
}

export const searchBeersService = async (
  textToSearch: string,
  type: "name" | "brewed",
  page?: number,
): Promise<{
  success: boolean;
  data?: BeerStructure[];
  error?: string;
}> => {
  const { data, error, success } = await customRequest(
    apiEndPoints.searchBeers(textToSearch, type, page),
  );
  if (success) {
    return { success, data: data as BeerStructure[] };
  }

  return { error, success };
};
