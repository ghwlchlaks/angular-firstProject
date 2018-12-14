//환경설정 파일과 같이 동일값을 공유할때 사용하는 클래스

export class JsonConfig {
    url : string;
    name: string;
}
export const JSON_DATA_CONFIG: JsonConfig = {
    url : 'assets/data/',
    name : 'book.json'
}
