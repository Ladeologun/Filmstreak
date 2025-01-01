import {test, expect, describe, it} from '@jest/globals';
import {getYear} from '~movies/utils';
import {convertToqueryParams} from '~utils/url';

test('get year from 2023-12-12 to be 2023', () => {
   expect(getYear('2023-12-12')).toBe(2023);
});

describe('convertToqueryParams', () => {
   it('should convert an object to query string', () => {
      const params = {
         name: 'John',
         age: 30,
         city: 'New York',
      };
      const result = convertToqueryParams(params);
      expect(result).toBe('name=John&age=30&city=New York');
   });

   it('should handle an empty object', () => {
      const params = {};
      const result = convertToqueryParams(params);
      expect(result).toBe('');
   });

   it('should handle a single key-value pair', () => {
      const params = {
         key: 'value',
      };
      const result = convertToqueryParams(params);
      expect(result).toBe('key=value');
   });

   it('should handle numbers as values', () => {
      const params = {
         id: 123,
         quantity: 10,
      };
      const result = convertToqueryParams(params);
      expect(result).toBe('id=123&quantity=10');
   });
});
