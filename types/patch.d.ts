/// <reference types="electron" />
/// <reference types="electron" />

declare class ModelProject {
    box_uv: boolean;
    texture_width: number;
    texture_height: number;
    name: string;
    geometry_name: string;

}

declare let Project: ModelProject

declare namespace Undo {
    let index: number
    let current_save: HistorySave | undefined
    function initEdit(aspects: UndoAspect): HistorySave;
    function finishEdit(edit_name: string, aspects?: UndoAspect);

}

declare type UndoAspect = {
    selection?: boolean
    elements?: (Cube | Locator)[]
    outliner?: boolean,
    group?: Group,
    textures?: Texture[],
    bitmap?: true,
    uv_mode?: boolean,
    animations?: Animation[]
    keyframes?: Keyframe[],
    display_slots?: string[],
    uv_only?: boolean
}

interface HistorySave {
    aspects: UndoAspect
}

interface HistoryEntry {
    before: HistorySave,
    post: HistorySave,
    action: string
}

interface Array<T> extends ArrayVector3 {
    map<U>(
        callbackfn: (value: T, index: number, array: T[]) => U,
        thisArg?: any
    ): { [K in keyof this]: U };
}

interface Array<T> extends ArrayVector2 {
    map<U>(
        callbackfn: (value: T, index: number, array: T[]) => U,
        thisArg?: any
    ): { [K in keyof this]: U };
}

// Deprecated
declare namespace ElecDialogs {
    function showMessageBox(browserWindow: Electron.BrowserWindow, options: Electron.MessageBoxSyncOptions, cb: (reuslt: (string) | (undefined)) => void): number;
    function howSaveDialog(browserWindow: Electron.BrowserWindow, options: Electron.SaveDialogSyncOptions, cb: (reuslt: number) => void): (string) | (undefined);
    function showOpenDialog(browserWindow: Electron.BrowserWindow, options: Electron.OpenDialogSyncOptions, cb: (reuslt: (string[]) | (undefined)) => void): (string[]) | (undefined);
}
//type SyncDialogElecDialogMethod<T extends (...any)=>any> = (a:[...Parameters<T>,(result:ReturnType<T>)=>void])=>ReturnType<T> //nope,its dead due to https://github.com/microsoft/TypeScript/issues/32164


declare let currentwindow: Electron.BrowserWindow;

declare class Mode {
    id: string
}

type BoneAnimatorChannel = 'rotation' | 'position' | 'scale'
// type Axis = 'x'|'y'|'z'
declare class BoneAnimator<CHANNEL extends string = BoneAnimatorChannel, AXIS extends string = axisLetter>{
    group: Group;
    channels: CHANNEL[];
    muted: Record<CHANNEL, boolean>;
    rotation: Keyframe[];
    position: Keyframe[];
    scale: Keyframe[];

    get keyframes(): Keyframe[];

    constructor(uuid: string, animatiom: Animation, name: string);
    createKeyframe(value: number, time: number, channel: CHANNEL, undo: any, select: any): Keyframe<AXIS>;
    interpolate(channel: CHANNEL, allow_expression: boolean, axis: AXIS): boolean | number;
    displayFrame(multiplier: number): void;
    fillValues(keyframe: Keyframe<AXIS>, values: any, allow_expression: boolean, round?: boolean): void;
}

interface MolangParser {
    global_variables: any;

}

declare namespace Interface {
    let Panels: Record<string, Panel>;
}

declare namespace Modes {
    let id: string;
    let selected: Mode | false
    let animate: boolean | undefined
    let edit: boolean | undefined
}

type CubeFaces = 'north' | 'east' | 'south' | 'west' | 'up' | 'down'

declare function autoStringify(object: any): string;

declare function newProject(format: ModelFormat, force?: boolean): boolean;

declare namespace Language {
    let data: Record<string, string>;
}

declare let Formats: {
    free: ModelFormat;
    java_block: ModelFormat;
    bedrock: ModelFormat;
    bedrock_old: ModelFormat;
    modded_entity: ModelFormat;
    optifine_entity: ModelFormat;
    optifine_part: ModelFormat;
    skin: ModelFormat;
    [id: string]: ModelFormat
}

declare let Toolbars: Record<string, Toolbar>


declare let updateNslideValues:()=>void;

declare const textures:Texture[];