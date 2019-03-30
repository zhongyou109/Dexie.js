import { setDatabaseEnumerator } from '../../helpers/database-enumerator';

export interface IDexieDependencies{
    indexedDB?: IDBFactory,
    IDBKeyRange?: IDBKeyRange
}

export class DexieDependencies implements IDexieDependencies{
    public constructor(args?: IDexieDependencies){
        if (args !== void 0){
            this.indexedDB = args.indexedDB;
            this.IDBKeyRange = args.IDBKeyRange;
        }
    }
    private pIndexedDB?: IDBFactory;
    public IDBKeyRange?: IDBKeyRange;
    public get indexedDB(){
        return this.pIndexedDB;
    }
    public set indexedDB(value: IDBFactory | undefined)
    {
        if (value !== this.pIndexedDB) {
            this.pIndexedDB = value;
            setDatabaseEnumerator(value)
        }
    }
}