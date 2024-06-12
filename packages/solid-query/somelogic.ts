import { queryCoreLogic } from '@juriorg/query-core';

export function solidQueryLogic(): string {
  const name = 'solid-query-logic: ' + queryCoreLogic();
  console.log(name);
  return name;
}
