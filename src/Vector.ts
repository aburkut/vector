
export type CoordsArray = [ number, number, number ] | number[];

export default class Vector {

  private readonly x: number;

  private readonly y: number;

  private readonly z: number;

  constructor(x: number | CoordsArray, y?: number, z?: number) {
    if(Array.isArray(x)) {
      this.x = x[0];
      this.y = x[1];
      this.z = x[2];
    } else {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public getZ(): number {
    return this.z;
  }

  public getCoords(): CoordsArray {
    const { x, y, z } = this;

    return [ x, y, z ];
  }

  private convertArray2Vector(coordsArray: CoordsArray): Vector {
    const [ x, y, z ] = coordsArray;

    return new Vector(x, y, z);
  }

  private getInputCoords(vector: Vector | CoordsArray): CoordsArray {
    if(Array.isArray(vector)) {
      vector = this.convertArray2Vector(vector);
    }

    const x = vector.getX();
    const y = vector.getY();
    const z = vector.getZ();

    return [ x, y, z ];
  }

  // (u1, u2, u3) + (v1, v2, v3) = (u1 + v1, u2 + v2, u3 + v3)
  public add(vector: Vector | CoordsArray): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();
    const [ v1, v2, v3 ] = this.getInputCoords(vector);

    const resultX = u1 + v1;
    const resultY = u2 + v2;
    const resultZ = u3 + v3;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) - (v1, v2, v3) = (u1 - v1, u2 - v2, u3 - v3)
  public sub(vector: Vector | CoordsArray): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();
    const [ v1, v2, v3 ] = this.getInputCoords(vector);

    const resultX = u1 - v1;
    const resultY = u2 - v2;
    const resultZ = u3 - v3;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) x (v1, v2, v3) = (u2 * v3 - u3 * v2, u3 * v1 - u1 * v3, u1 * v2 - u2 * v1)
  public cross(vector: Vector | CoordsArray): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();
    const [ v1, v2, v3 ] = this.getInputCoords(vector);

    const resultX = u2 * v3 - u3 * v2;
    const resultY = u3 * v1 - u1 * v3;
    const resultZ = u1 * v2 - u2 * v1;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) . (v1, v2, v3) = (u1 * v1 + u2 * v2 + u3 * v3)
  public dot(vector: Vector | CoordsArray): number {
    const [ u1, u2, u3 ] = this.getCoords();
    const [ v1, v2, v3 ] = this.getInputCoords(vector);

    return u1 * v1 + u2 * v2 + u3 * v3;
  }
}
