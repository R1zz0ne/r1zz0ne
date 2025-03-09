export const getColorMix = (color: string, opacity: number = 30): string => {
    return `color-mix(in srgb, ${color} ${opacity}%, transparent)`;
}

export const getGradient = (colorFirst: string, colorSecond: string, direction?: string): string => {
    if (direction) {
        return `linear-gradient(${direction}, ${colorFirst}, ${colorSecond})`
    } else {
        return `linear-gradient(${colorFirst}, ${colorSecond})`
    }

}