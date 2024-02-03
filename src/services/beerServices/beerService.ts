import { apiEndPoints } from "../../../configs/environments";
import { BeerStructure } from "../../interfaces/beersInterfaces";
import customRequest from "../../utils/customRequest";

export interface CustomResponseStructure {
  success: boolean;
  data?: unknown;
  error?: string;
}

export async function getBeersService(): Promise<CustomResponseStructure> {
  const { data, error, success } = await customRequest(apiEndPoints.getBeers, {
    method: "GET",
  });

  if (success) return { success, data: data as BeerStructure[] };

  return { error, success };
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
    return { success, data: (data as BeerStructure[])[0] as BeerStructure };
  }

  return { error, success };
}
