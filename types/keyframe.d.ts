declare class KeyframeDataPoint {
    constructor(keyframe: Keyframe);

    keyframe: Keyframe
    
    extend(data: any): void;
    getUndoCopy(): {};
}

interface KeyframeOptions {

}
type axisLetter = 'x' | 'y' | 'z'


declare class Keyframe<AXIS extends string = axisLetter> {
    constructor(options: KeyframeOptions, uuid: any);
    time:number;
    channel:string;
    data_points:Partial<AXIS>[]

    extend(data: KeyframeOptions): this;
    get(axis: AXIS, data_point?: number): any;
    calc(axis: AXIS, data_point?: number): any;
    set(axis: AXIS, value: any, data_point?: number): this;
    offset(axis: AXIS, amount: any, data_point?: number): any;
    flip(axis: AXIS): this;
    getLerp(other: any, axis: AXIS, amount: any, allow_expression: any): any;
    getCatmullromLerp(before_plus: Keyframe, before: Keyframe, after: Keyframe, after_plus: Keyframe, axis: AXIS, alpha: number): any;
    getArray(data_point?: number): any[];
    getFixed(data_point?: number): any;
    getTimecodeString(): string;
    compileBedrockKeyframe(): object;
    replaceOthers(save: any): void;
    select(event: any): this;
    callPlayhead(): this;
    showContextMenu(event: Event): this;
    remove(): void;
    forSelected(callback: (keyframe: Keyframe) => void, undo_tag: any): this[];
    getUndoCopy(save: any): {
        animator: any;
        channel?: string | null;
        data_points: object[];
    };
}