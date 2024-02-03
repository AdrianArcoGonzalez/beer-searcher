import axiosInstance from "../../configs/axios";

export type MethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface CustomError extends Error {
  message: string;
}

export interface CustomResponseStructure {
  success: boolean;
  data?: unknown;
  error?: string;
}
const customRequest = async (
  enpoint: string,
  configs: { method?: MethodType } = {}
): Promise<CustomResponseStructure> => {
  try {
    const response = await axiosInstance(enpoint, {
      method: configs.method ?? "GET",
    });

    if (response.status === 200) {
      return { data: response.data, success: true };
    }

    return { success: false, error: response.statusText };
  } catch (error) {
    return { success: false, error: (error as CustomError).message };
  }
};

export default customRequest;
