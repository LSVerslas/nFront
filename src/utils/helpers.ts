





export function getNiceDate(dateString: string): string {
    const dateObj = new Date(dateString);
    const formatedDate = dateObj.toLocaleDateString('lt-LT', { dateStyle: 'medium' });
    return formatedDate;    
}