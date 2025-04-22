export class CreateTarefasDto {
  id: string;
  titulo: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING' | 'CANCELLED';
  descricao: string | null | undefined;
}
