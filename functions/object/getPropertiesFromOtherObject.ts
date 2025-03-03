/**
 * @name getPropertiesFromOtherObject
 * @description Copies the properties from one object to another.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/mdwVeGX }
 */

type ObjectType = { [key: string]: any };

const getPropertiesFromOtherObject = (
  objectToCopyProps: ObjectType,
  firstValueProp: string,
  objectToGetProps: ObjectType,
  secondValueProp: string,
  properties: string[],
): ObjectType => {
  const { keys, values } = Object;
  const result = { ...objectToGetProps };

  keys(objectToGetProps).forEach(key => {
    const valueToCopy = values(objectToCopyProps).find(
      item => item[firstValueProp] === objectToGetProps[key][secondValueProp],
    );

    if (valueToCopy) {
      properties.forEach(property => (result[key][property] = valueToCopy[property]));
    }
  });

  return result;
};

export default getPropertiesFromOtherObject;
