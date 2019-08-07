interface ScatterGrafData {
    x: number;
    y: number;
}

interface BubbleGrafData {
    x: number;
    y: number;
    r: number;
}

export interface GrafDataSet {
    label: string;
    data: number[] | BubbleGrafData[] | ScatterGrafData[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
}

export interface GrafDataObj {
    labels: string[];
    datasets: GrafDataSet[];
}

export interface GrafData {
    name: string;
    type: string;
    data: GrafDataObj;
}
