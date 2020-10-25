import Vector from '../../src/Vector';

describe('Vector class', () => {
  describe('getCoords method', () => {
    it('should return array of coordinates for a vector', () => {
      expect(new Vector(1, 2, 3).getCoords()).toStrictEqual([ 1, 2, 3 ]);
      expect(new Vector([ 1, 2, 3 ]).getCoords()).toStrictEqual([ 1, 2, 3 ]);
      expect(new Vector([ 2, 0, 1 ]).getCoords()).toStrictEqual([ 2, 0, 1 ]);
      expect(new Vector([ 2, 0 ]).getCoords()).toStrictEqual([ 2, 0 ]);
      expect(new Vector(1, 2).getCoords()).toStrictEqual([ 1, 2 ]);
      expect(new Vector(0, 0).getCoords()).toStrictEqual([ 0, 0 ]);
      expect(new Vector([ -1, -1, -6000 ]).getCoords()).toStrictEqual([ -1, -1, -6000 ]);
    });
  });

  describe('add method', () => {
    it('should solve "vector add operation" for (1, 0) + (-1, 4)', () => {
      const a = new Vector(1, 0);
      const bCoords = [ -1, 4 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = [ 0, 4 ];
    
      expect(a.add(bVector)).toStrictEqual(expectedResult);
      expect(a.add(bCoords)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector add operation" for (0, 0) + (1, 1)', () => {
      const a = new Vector(0, 0);
      const bCoords = [ 1, 1 ];
      const bVector = new Vector(bCoords);
  
      const expectedResult = [ 1, 1 ];
  
      expect(a.add(bVector)).toStrictEqual(expectedResult);
      expect(a.add(bCoords)).toStrictEqual(expectedResult);
    });

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
    it('should solve "vector add operation" for (1, 0) - (-1, 4)', () => {
      const a = new Vector(1, 0);
      const bCoords = [ -1, 4 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = [ 2, -4 ];
    
      expect(a.sub(bVector)).toStrictEqual(expectedResult);
      expect(a.sub(bCoords)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector add operation" for (0, 0) - (1, 1)', () => {
      const a = new Vector(0, 0);
      const bCoords = [ 1, 1 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = [ -1, -1 ];
    
      expect(a.sub(bVector)).toStrictEqual(expectedResult);
      expect(a.sub(bCoords)).toStrictEqual(expectedResult);
    });

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
  
  describe('mul method', () => {
    it('should solve "vector Multiplication operation" for (1, 0, 3) x 5', () => {
      const a = new Vector(1, 0,3);
  
      const expectedResult = [ 5, 0, 15 ];
  
      expect(a.mul(5)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector Multiplication operation" for (0, 50000) x 0.5', () => {
      const a = new Vector(0, 50000);
  
      const expectedResult = [ 0, 25000 ];
  
      expect(a.mul(0.5)).toStrictEqual(expectedResult);
    });
  });
  
  describe('div method', () => {
    it('should solve "vector Multiplication operation" for (1, 0, 3) / 5', () => {
      const a = new Vector(1, 0,3);
    
      const expectedResult = [ 0.2, 0, 0.6 ];
    
      expect(a.div(5)).toStrictEqual(expectedResult);
    });
  
    it('should solve "vector Multiplication operation" for (0, 50000) / 10000', () => {
      const a = new Vector(0, 50000);
    
      const expectedResult = [ 0, 5 ];
    
      expect(a.div(10000)).toStrictEqual(expectedResult);
    });
  });

  describe('cross method', () => {
    it('should throw an error for 2d vectors (1, 0) x (-1, 4)', () => {
      const a = new Vector(1, 0);
      const bCoords = [ -1, 4 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = 'The cross method is supported just for 3d vectors';
    
      expect(() => a.cross(bVector)).toThrow(expectedResult);
      expect(() => a.cross(bCoords)).toThrow(expectedResult);
    });
  
    it('should throw an error for cross product between 2d and 3d (1, 0, 1) x (-1, 4)', () => {
      const a = new Vector(1, 0, 1);
      const bCoords = [ -1, 4 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = 'The cross method is supported just for 3d vectors';
    
      expect(() => a.cross(bVector)).toThrow(expectedResult);
      expect(() => a.cross(bCoords)).toThrow(expectedResult);
    });
    
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
    it('should throw an error  if vectors have unequal dimensions (1, 0, 1) x (-1, 4)', () => {
      const a = new Vector(1, 0, 1);
      const bCoords = [ -1, 4 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = 'Vectors have unequal dimensions';
    
      expect(() => a.dot(bVector)).toThrow(expectedResult);
      expect(() => a.dot(bCoords)).toThrow(expectedResult);
    });
  
    it('should throw an error  if vectors have unequal dimensions (1, 0) x (-1, 4, -5)', () => {
      const a = new Vector(1, 0);
      const bCoords = [ -1, 4, -5 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = 'Vectors have unequal dimensions';
    
      expect(() => a.dot(bVector)).toThrow(expectedResult);
      expect(() => a.dot(bCoords)).toThrow(expectedResult);
    });
  
    it('should solve "vector dot product operation" for (1, 10) . (-1, 4000)', () => {
      const a = new Vector(1, 10);
      const bCoords = [ -1, 4000 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = 39999;
    
      expect(a.dot(bVector)).toBe(expectedResult);
      expect(a.dot(bCoords)).toBe(expectedResult);
    });

    it('should solve "vector dot product operation" for (1, 0, 3) . (-1, 4, 2)', () => {
      const a = new Vector(1, 0,3);
      const bCoords = [ -1, 4, 2 ];
      const bVector = new Vector(bCoords);
  
      const expectedResult = 5;
  
      expect(a.dot(bVector)).toBe(expectedResult);
      expect(a.dot(bCoords)).toBe(expectedResult);
    });
  
    it('should solve "vector dot product operation" for (100, 300, 5000) x (1000, -3000, -1000)', () => {
      const a = new Vector(100, 300,5000);
      const bCoords = [ 1000, -3000, -1000 ];
      const bVector = new Vector(bCoords);
    
      const expectedResult = -5800000;
    
      expect(a.dot(bVector)).toBe(expectedResult);
      expect(a.dot(bCoords)).toBe(expectedResult);
    });
  });
});
