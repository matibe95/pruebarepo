export interface User{
  id?: number,
  name: string,
  email:string;
  password: string;
  password_confirmed: string;
  created_at?: string,
  deleted_at?: string;
}