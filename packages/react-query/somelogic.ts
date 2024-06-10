import { queryCoreLogic } from '@juriorg/query-core';

export function reactQueryLogic(): string {
  const name = 'react-query-logic' + queryCoreLogic();
  console.log(name);
  return name;
}
