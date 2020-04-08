

function get(name: string, required = false, alternateName: string = null): string {
    const val = process.env[name] || null;
    if (!val && required) {
        throw new Error(`${alternateName || name} environment variable is required.`);
    }
    return val;
}

export const PORT = process.env.PORT || 8080;

export const MONGO_URL = "";

export const URL_APP = "";

export const NODE_ENV = get('NODE_ENV') || 'development';

export const IS_DEV = NODE_ENV !== 'production';



