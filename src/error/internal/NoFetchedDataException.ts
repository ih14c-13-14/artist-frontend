/**
 * バックエンドエラーは出なかったが、本来出るべきデータが存在しなかった場合に送出する例外
 */
export class NoFetchedDataException extends Error {}
