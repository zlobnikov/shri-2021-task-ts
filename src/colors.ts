import { backgroundColors, effects, fontColors, Reset, ColorType, WhiteBlack } from './model';
function addColor(text: string, color: ColorType, isBackground = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
type EffectsType = keyof typeof effects;
function getEffects(effectList: EffectsType[]) {
    return effectList.map(effect => effects[effect]).join('');
}
export type ColorOptionsType = {
    font?: ColorType,
    background?: WhiteBlack,
    effects?: EffectsType[]
};
export function color(text: string, options: ColorOptionsType) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
