import { CreateTarefaDto } from './tarefa.dto';

describe('TarefaDto', () => {
  it('should be defined', () => {
    expect(new CreateTarefaDto()).toBeDefined();
  });
});
