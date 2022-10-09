import axios from 'axios';

interface axiosquery {
    url: string,
    method: string, 
    data: any,
    params: string
    baseUrl: string
}

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params } : axiosquery) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      if (method === "POST"){
        return { data: { data: result.data, status: result.status } };
      }else{
        return { data: result.data }
      }
    } catch (axiosError) {
      let err:any = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
