export class UpdateTarefasDto {
  id: string;
  title: string;
  description: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING' | 'CANCELLED';
}
