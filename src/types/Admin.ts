import Role from "@/types/Role";

export default interface Admin {
  id: string;

  readonly role: Role;

  fio: string;

  login: string;

  password: string;
}
