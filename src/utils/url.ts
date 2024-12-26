
export type QueryParamType = {
    [key:string]:string|number
}

export const convertToqueryParams = (params:QueryParamType) => {
    let queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&')
    return queryParams
}