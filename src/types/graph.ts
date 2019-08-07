export interface GrafDataSet {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}

export interface GrafDataObj {
    labels: string[];
    datasets: GrafDataSet[];
}

export interface GrafData {
    name: string;
    data: GrafDataObj;
}
