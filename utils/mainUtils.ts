

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


export const slogan = "We build exceptionally efficient customer acquisition systems using SEO without effort or huge investments"

export const homePageTitle = "Gliesses Home Page"
export const blogTitle = "Blog Gliesess"
export const categoriesTitle = `Categories - Blog Gliesess`

export const categoryTitle = (category: string) => `${category} - Blog Gliesess`

export const categoryUrl = (category: string) => `${domain}/blog/categories/${category.toLowerCase().replaceAll(' ', '-')}`


export function kFormatter(num: number) {
    return Math.abs(num) > 999_999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1) as any) + 'm' :
        Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1) as any) + 'k' :
            (Math.sign(num) * Math.abs(num)).toFixed(1)
}