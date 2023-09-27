export interface ErrorResponse {
  status: number;
  message: string[];
  code?: number;
  error: string;
}

export interface SuccessResponse {
  status: number;
  message: string[];
  success: boolean;
}
