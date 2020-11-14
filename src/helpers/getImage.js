/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
export default function GetImage(imageName) {
  return require(`../img/portfolio/${imageName}`);
}
