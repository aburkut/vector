import Vector from '../../src/Vector';

describe('Vector class', () => {
  describe('getCoords method', () => {
    it('should return array of coordinates for a vector', () => {
      expect(new Vector(1, 2, 3).getCoords()).toStrictEqual([ 1, 2, 3 ]);
      expect(new Vector([ 1, 2, 3 ]).getCoords()).toStrictEqual([ 1, 2, 3 ]);
      expect(new Vector([ 2, 0, 1 ]).getCoords()).toStrictEqual([ 2, 0, 1 ]);
    });
  });

  describe('add method', () => {
    it('should solve "vector add operation" for (1, 0, 3) + (-1, 4, 2)', () => {
      const a = new Vector(1, 0,3);
      const bCoords = [ -1, 4, 2 ];
      const bVector = new Vector(bCoords);
  
      const expectedResult = [ 0, 4, 5 ];

      expect(a.add(bVector)).toStrictEqual(expectedResult);
      expect(a.add(bCoords)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector add operation" for (0, 0, 1) + (1, 1, 1)', () => {
      const a = new Vector(0, 0,1);
      const bCoords = [ 1, 1, 1 ];
      const bVector = new Vector(bCoords);

      const expectedResult = [ 1, 1, 2 ];

      expect(a.add(bVector)).toStrictEqual(expectedResult);
      expect(a.add(bCoords)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector add operation" for (0, 0, 0) + (0, 0, 0)', () => {
      const a = new Vector(0, 0,0);
      const bCoords = [ 0, 0, 0 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = [ 0, 0, 0 ];
    
      expect(a.add(bVector)).toStrictEqual(expectedResult);
      expect(a.add(bCoords)).toStrictEqual(expectedResult);
    });
  });

  describe('sub method', () => {
    it('should solve "vector sub operation" for (1, 0, 3) - (-1, 4, 2)', () => {
      const a = new Vector(1, 0,3);
      const bCoords = [ -1, 4, 2 ];
      const bVector = new Vector(bCoords);
  
      const expectedResult = [ 2, -4, 1 ];
  
      expect(a.sub(bVector)).toStrictEqual(expectedResult);
      expect(a.sub(bCoords)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector add operation" for (0, 0, 1) - (1, 1, 1)', () => {
      const a = new Vector(0, 0,1);
      const bCoords = [ 1, 1, 1 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = [ -1, -1, 0 ];
    
      expect(a.sub(bVector)).toStrictEqual(expectedResult);
      expect(a.sub(bCoords)).toStrictEqual(expectedResult);
    });
  });

  describe('cross method', () => {
    it('should solve "vector cross product operation" for (1, 0, 3) x (-1, 4, 2)', () => {
      const a = new Vector(1, 0,3);
      const bCoords = [ -1, 4, 2 ];
      const bVector = new Vector(bCoords);
  
      const expectedResult = [ -12, -5, 4 ];
  
      expect(a.cross(bVector)).toStrictEqual(expectedResult);
      expect(a.cross(bCoords)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector cross product operation" for (-1, -1, -1) x (-1, -1, -1)', () => {
      const a = new Vector(-1, -1,-1);
      const bCoords = [ -1, -1, -1 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = [ 0, 0, 0 ];
    
      expect(a.cross(bVector)).toStrictEqual(expectedResult);
      expect(a.cross(bCoords)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector cross product operation" for (100, 300, 5000) x (1000, -3000, -1000)', () => {
      const a = new Vector(100, 300,5000);
      const bCoords = [ 1000, -3000, -1000 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = [ 14700000, 5100000, -600000 ];
    
      expect(a.cross(bVector)).toStrictEqual(expectedResult);
      expect(a.cross(bCoords)).toStrictEqual(expectedResult);
    });
  });
  
  describe('dot method', () => {
    it('should solve "vector dor product operation" for (1, 0, 3) . (-1, 4, 2)', () => {
      const a = new Vector(1, 0,3);
      const bCoords = [ -1, 4, 2 ];
      const bVector = new Vector(bCoords);
  
      const expectedResult = 5;
  
      expect(a.dot(bVector)).toBe(expectedResult);
      expect(a.dot(bCoords)).toBe(expectedResult);
    });
  
    it('should solve "vector dor product operation" for (100, 300, 5000) x (1000, -3000, -1000)', () => {
      const a = new Vector(100, 300,5000);
      const bCoords = [ 1000, -3000, -1000 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = -5800000;
    
      expect(a.dot(bVector)).toBe(expectedResult);
      expect(a.dot(bCoords)).toBe(expectedResult);
    });
  });
});
