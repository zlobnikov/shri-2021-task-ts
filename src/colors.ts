import { backgroundColors, effects, fontColors, Reset, WhiteBlack } from './model';
type ColorsType = keyof typeof backgroundColors;
function addColor(text: string, color: ColorsType, isBackground = false) {
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
    font?: ColorsType,
    background?: WhiteBlack,
    effects?: string[]
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
