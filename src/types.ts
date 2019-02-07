export interface SearchResult {
    images: {
        preview_gif: {
            url: string
        }
    }, 
    id: number
}[];

export interface SearchError {
    err: string
}

export interface SearchProps {
    (searchTerm: string): void;
}