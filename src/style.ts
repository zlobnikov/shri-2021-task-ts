import { color } from './colors';
import { ColorOptionsType } from './colors';
import { markdown } from './md';
import { MarkdownOptionsType } from './md';
type OptionsType = ColorOptionsType & MarkdownOptionsType;
export function style(text: string, options: OptionsType): string {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
