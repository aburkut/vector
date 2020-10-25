
export type CoordsArray = [ number, number, number ] | [ number, number ] | number[];

export default class Vector {

  private readonly x: number;

  private readonly y: number;

  private readonly z: number | undefined;

  constructor(x: number | CoordsArray, y?: number, z?: number) {
    if(Array.isArray(x)) {
      this.x = x[0];
      this.y = x[1];
      if(x[2] !== undefined) this.z = x[2];
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

    if(this.is2d()) {
      return [ x, y ];
    }

    return [ x, y, z ];
  }

  private is2d(): boolean {
    if(this.z === undefined) {
      return true;
    }

    return false;
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

    if(z === undefined) {
      return  [ x ,y ];
    }

    return [ x, y, z ];
  }

  // (u1, u2, u3) + (v1, v2, v3) = (u1 + v1, u2 + v2, u3 + v3)
  public add(vector: Vector | CoordsArray): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();
    const [ v1, v2, v3 ] = this.getInputCoords(vector);

    const resultX = u1 + v1;
    const resultY = u2 + v2;

    if(this.is2d()) {
      return [ resultX, resultY ];
    }

    const resultZ = u3 + v3;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) - (v1, v2, v3) = (u1 - v1, u2 - v2, u3 - v3)
  public sub(vector: Vector | CoordsArray): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();
    const [ v1, v2, v3 ] = this.getInputCoords(vector);

    const resultX = u1 - v1;
    const resultY = u2 - v2;

    if(this.is2d()) {
      return [ resultX, resultY ];
    }

    const resultZ = u3 - v3;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) x f = (u1 x f, u2 x f, u3 x f)
  public mul(value: number): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();

    const resultX = u1 * value;
    const resultY = u2 * value;

    if(this.is2d()) {
      return [ resultX, resultY ];
    }

    const resultZ = u3 * value;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) / f = (u1 / f, u2 / f, u3 / f)
  public div(value: number): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();

    const resultX = u1 / value;
    const resultY = u2 / value;

    if(this.is2d()) {
      return [ resultX, resultY ];
    }

    const resultZ = u3 / value;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) x (v1, v2, v3) = (u2 * v3 - u3 * v2, u3 * v1 - u1 * v3, u1 * v2 - u2 * v1)
  public cross(vector: Vector | CoordsArray): CoordsArray {
    const [ u1, u2, u3 ] = this.getCoords();
    const inputCoords = this.getInputCoords(vector);
    const [ v1, v2, v3 ] = inputCoords;

    if(this.is2d() || inputCoords.length === 2) {
      throw new Error('The cross method is supported just for 3d vectors');
    }

    const resultX = u2 * v3 - u3 * v2;
    const resultY = u3 * v1 - u1 * v3;
    const resultZ = u1 * v2 - u2 * v1;

    return [ resultX, resultY, resultZ ];
  }

  // (u1, u2, u3) . (v1, v2, v3) = (u1 * v1 + u2 * v2 + u3 * v3)
  public dot(vector: Vector | CoordsArray): number {
    const [ u1, u2, u3 ] = this.getCoords();
    const inputCoords = this.getInputCoords(vector);
    const [ v1, v2, v3 ] = inputCoords;

    if((this.is2d() && inputCoords.length === 3) || (! this.is2d() && inputCoords.length === 2)) {
      throw new Error('Vectors have unequal dimensions');
    }

    if(this.is2d()) {
      return u1 * v1 + u2 * v2;
    }

    return u1 * v1 + u2 * v2 + u3 * v3;
  }
}
