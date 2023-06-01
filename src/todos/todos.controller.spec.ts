import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';

describe('TodosController', () => {
  let todosController: TodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
    }).compile();

    todosController = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(todosController).toBeDefined();
  });

  it('should return empty array', () => {
    expect(todosController.getTodos()).toHaveLength(0);
  });
});
