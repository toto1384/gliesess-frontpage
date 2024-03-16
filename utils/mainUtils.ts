

export const innerLeave = (arr: any[], value: any | ((index: number) => any)) => {

    return arr.reduce((result, element, index, array) => {

        result.push(element);

        if (index < array.length - 1) {
            result.push(typeof value === 'function' ? value(index) : value);
        }

        return result;
    }, []);
};