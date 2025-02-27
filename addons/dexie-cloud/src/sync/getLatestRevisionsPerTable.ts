import { DBOperationsSet } from 'dexie-cloud-common';

export function getLatestRevisionsPerTable(
  clientChangeSet: DBOperationsSet,
  lastRevisions = {} as { [table: string]: number; }) {
  for (const { table, muts } of clientChangeSet) {
    const lastRev = muts.length > 0 ? muts[muts.length - 1].rev || 0 : 0;
    lastRevisions[table] = lastRev;
  }
  return lastRevisions;
}
