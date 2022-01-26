export interface BoardItem {
    text: string;
    status: string;
    _id: number;
    laneId: any;
    type: string
}

export interface ILaneProps {
    children?: ReactElement[];
    initialBoard?: any;
    laneTitle: string;
    laneId: string;
}

