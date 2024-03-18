

export const innerLeave = (arr: any[], value: any | ((index: number) => any)) => {

    return arr.reduce((result, element, index, array) => {

        result.push(element);

        if (index < array.length - 1) {
            result.push(typeof value === 'function' ? value(index) : value);
        }

        return result;
    }, []);
};

export const dev = (process.env.NODE_ENV || '').indexOf('production') === -1;

export const domain: string = dev ? "http://localhost:3000" : `https://www.gliesess.com`

export const twitterHandle = "@gliesess_ads"