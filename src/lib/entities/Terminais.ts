import { ITerminais } from '../interfaces/ITerminais';

export class Terminais implements ITerminais {

    public serialNumber: string;
    public active: boolean;
    public terminalModelName: string;
    public terminalModelId: string;
    public terminalManufactureName: string;
    public terminalManufactureId: string;
    public terminalId: string;
    public terminalStatusId: string;
    public page: string;
    public perPage: string;

    constructor(props: Omit<Terminais, 'MachineOrderid'>) {
        Object.assign(this, props);
    };
};