import {convertToqueryParams, QueryParamType} from '~utils/url';
import ENV_VARIABLES from '../../config';

type RequestParams = {
   path?: string;
   method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
   queryParams?: QueryParamType | null;
   body?: object;
   headers?: object;
   fullResponse?: boolean;
};

const handleResponse = async (response: Response, fullResponse = false) => {
   // unknown
   if (!response) {
      throw new Error('An unknown error occurred');
   }

   // server errors - 50x
   if (response.status >= 500 && response.status <= 599) {
      throw new Error('server error');
   }

   // unauthorized
   if (response.status === 401) {
      throw new Error('unauthorized request');
   }

   // timeout
   if (response.status === 408) {
      throw new Error('request timeout');
   }

   // other 400x errors
   if (response.status >= 400 && response.status <= 499) {
      response.text().then(text => {
         const errorObj = JSON.parse(text);
         throw new Error(errorObj?.message ?? 'An error occurred');
      });
   }

   if (response.ok) {
      if (response.status === 204) {
         return Promise.resolve();
      } else return fullResponse ? response : response.json().then(v => v);
   }

   await handleError(response);
};

export const handleError = async (error: unknown) => {
   if (error instanceof Error) {
      const errorMessage = error.message?.toLowerCase() ?? '';
      const matchesNetworkError = errorMessage.includes('network');
      if (matchesNetworkError) {
         throw new Error('network failure');
      } else {
         throw new Error('An unknown error occurred');
      }
   } else {
      throw new Error('An unknown error occurred');
   }
};

export default class Client {
   static get(params: RequestParams) {
      return this.request({method: 'GET', ...params});
   }

   static post(params: RequestParams) {
      return this.request({method: 'POST', ...params});
   }

   static put(params: RequestParams) {
      return this.request({method: 'PUT', ...params});
   }

   static delete(params: RequestParams) {
      return this.request({method: 'DELETE', ...params});
   }

   static patch(params: RequestParams) {
      return this.request({method: 'PATCH', ...params});
   }

   static async request({
      path,
      method,
      queryParams = null,
      body,
      headers = {},
      fullResponse = false,
   }: RequestParams) {
      let apiUrl = ENV_VARIABLES.TMDB_BASE_URL;

      let formattedQuery = '';
      if (queryParams) {
         formattedQuery = convertToqueryParams(queryParams);
      }

      const url = formattedQuery ? `${apiUrl}${path}?${formattedQuery}` : `${apiUrl}${path}`;

      const defaultHeaders = {
         Authorization: `Bearer ${ENV_VARIABLES.TMDB_API_KEY}`,
         'Content-Type': 'application/json',
         Accept: 'application/json',
      };

      let options = {
         method,
         body: JSON.stringify(body),
         headers: {...defaultHeaders, ...headers},
      };

      try {
         const response = await fetch(url, options);
         return handleResponse(response, fullResponse);
      } catch (error: unknown) {
         return handleError(error);
      }
   }
}
